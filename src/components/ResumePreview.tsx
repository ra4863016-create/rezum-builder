import { ResumeData, TemplateType } from "@/types/resume";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
}

const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const { personalInfo, experience, education, skills } = data;

  const templateStyles = {
    modern: {
      container: "bg-white",
      header: "bg-gradient-to-r from-cyan-600 to-teal-500 text-white p-8",
      section: "border-l-4 border-cyan-500",
      accent: "text-cyan-600",
    },
    classic: {
      container: "bg-white",
      header: "border-b-2 border-gray-800 pb-6",
      section: "border-b border-gray-200",
      accent: "text-gray-800",
    },
    minimal: {
      container: "bg-white",
      header: "pb-6",
      section: "",
      accent: "text-gray-600",
    },
    creative: {
      container: "bg-gradient-to-br from-purple-50 to-pink-50",
      header: "bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8 rounded-xl mx-4 mt-4",
      section: "border-l-4 border-purple-500",
      accent: "text-purple-600",
    },
  };

  const style = templateStyles[template];

  return (
    <div id="resume-preview" className={`${style.container} shadow-2xl max-w-[210mm] mx-auto`}>
      {/* Header */}
      <div className={style.header}>
        <h1 className={`text-3xl font-bold ${template === 'classic' || template === 'minimal' ? 'text-gray-900' : ''}`}>
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className={`text-xl mt-1 ${template === 'classic' || template === 'minimal' ? 'text-gray-600' : 'opacity-90'}`}>
          {personalInfo.title || "Professional Title"}
        </p>
        
        <div className={`flex flex-wrap gap-4 mt-4 text-sm ${template === 'classic' || template === 'minimal' ? 'text-gray-600' : 'opacity-90'}`}>
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              {personalInfo.linkedin}
            </span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {personalInfo.website}
            </span>
          )}
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Summary */}
        {personalInfo.summary && (
          <section className={`${style.section} pl-4`}>
            <h2 className={`text-lg font-semibold mb-2 ${style.accent}`}>Professional Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className={`${style.section} pl-4`}>
            <h2 className={`text-lg font-semibold mb-4 ${style.accent}`}>Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className={`${style.section} pl-4`}>
            <h2 className={`text-lg font-semibold mb-4 ${style.accent}`}>Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className={`${style.section} pl-4`}>
            <h2 className={`text-lg font-semibold mb-4 ${style.accent}`}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className={`px-3 py-1 rounded-full text-sm ${
                    template === 'modern' ? 'bg-cyan-100 text-cyan-800' :
                    template === 'creative' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {skill.name}
                  <span className="ml-1 opacity-60">• {skill.level}</span>
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
