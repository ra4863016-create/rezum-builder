import { TemplateType } from "@/types/resume";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selected: TemplateType;
  onSelect: (template: TemplateType) => void;
}

const templates: { id: TemplateType; name: string; description: string; preview: string }[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean design with teal accents",
    preview: "bg-gradient-to-r from-cyan-600 to-teal-500",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional look",
    preview: "bg-gray-800",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant",
    preview: "bg-gray-400",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with vibrant colors",
    preview: "bg-gradient-to-r from-purple-600 to-pink-500",
  },
];

const TemplateSelector = ({ selected, onSelect }: TemplateSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelect(template.id)}
          className={`relative group p-4 rounded-xl border-2 transition-all duration-300 text-left ${
            selected === template.id
              ? "border-primary bg-primary/10"
              : "border-border hover:border-primary/50 bg-card"
          }`}
        >
          {selected === template.id && (
            <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-4 w-4 text-primary-foreground" />
            </div>
          )}
          
          <div className={`h-16 rounded-lg mb-3 ${template.preview}`} />
          
          <h3 className="font-semibold text-foreground">{template.name}</h3>
          <p className="text-sm text-muted-foreground">{template.description}</p>
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
