import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResumeData, TemplateType } from "@/types/resume";
import Header from "@/components/Header";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";
import { Button } from "@/components/ui/button";
import { Download, Layout, Eye, Loader2 } from "lucide-react";

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    summary: "",
    linkedin: "",
    website: "",
  },
  experience: [],
  education: [],
  skills: [],
};

const Builder = () => {
  const [searchParams] = useSearchParams();
  const templateParam = searchParams.get("template") as TemplateType | null;

  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(templateParam || "modern");
  const [showTemplates, setShowTemplates] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) {
      toast.error("Could not find resume preview");
      return;
    }

    setIsDownloading(true);
    toast.loading("Generating PDF...");

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      const fileName = resumeData.personalInfo.fullName
        ? `${resumeData.personalInfo.fullName.replace(/\s+/g, "_")}_Resume.pdf`
        : "Resume.pdf";
      
      pdf.save(fileName);
      toast.dismiss();
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to generate PDF. Please try again.");
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Toolbar */}
        <div className="sticky top-16 z-40 border-b border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold hidden sm:block">Resume Builder</h1>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTemplates(!showTemplates)}
                className="gap-2"
              >
                <Layout className="h-4 w-4" />
                Templates
              </Button>
            </div>
            <Button
              variant="hero"
              onClick={handleDownload}
              disabled={isDownloading}
              className="gap-2"
            >
              {isDownloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              Download PDF
            </Button>
          </div>
        </div>

        {/* Template Selector Drawer */}
        {showTemplates && (
          <div className="border-b border-border/50 bg-card/50 backdrop-blur-xl animate-slide-up">
            <div className="container mx-auto px-4 py-6">
              <h2 className="text-lg font-semibold mb-4">Select Template</h2>
              <TemplateSelector
                selected={selectedTemplate}
                onSelect={(template) => {
                  setSelectedTemplate(template);
                  setShowTemplates(false);
                  toast.success(`Switched to ${template} template`);
                }}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>

            {/* Preview Section */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-44">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Live Preview</h2>
                </div>
                <div
                  ref={previewRef}
                  className="rounded-xl overflow-hidden border border-border/50 bg-card"
                  style={{ maxHeight: "calc(100vh - 220px)", overflowY: "auto" }}
                >
                  <div className="transform scale-[0.6] origin-top" style={{ width: "166.67%" }}>
                    <ResumePreview data={resumeData} template={selectedTemplate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;
