import { useState } from "react";
import { ResumeData, Experience, Education, Skill } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, User, Briefcase, GraduationCap, Wrench } from "lucide-react";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const [activeTab, setActiveTab] = useState("personal");

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    onChange({ ...data, experience: [...data.experience, newExp] });
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediate",
    };
    onChange({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      skills: data.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  return (
    <div className="glass-card p-6 h-full overflow-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-secondary">
          <TabsTrigger value="personal" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Personal</span>
          </TabsTrigger>
          <TabsTrigger value="experience" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Experience</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Education</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Wrench className="h-4 w-4" />
            <span className="hidden sm:inline">Skills</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label>Full Name</Label>
              <Input
                value={data.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Label>Professional Title</Label>
              <Input
                value={data.personalInfo.title}
                onChange={(e) => updatePersonalInfo("title", e.target.value)}
                placeholder="Senior Software Engineer"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={data.personalInfo.location}
                onChange={(e) => updatePersonalInfo("location", e.target.value)}
                placeholder="San Francisco, CA"
                className="mt-1"
              />
            </div>
            <div>
              <Label>LinkedIn (optional)</Label>
              <Input
                value={data.personalInfo.linkedin || ""}
                onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                placeholder="linkedin.com/in/johndoe"
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Label>Website (optional)</Label>
              <Input
                value={data.personalInfo.website || ""}
                onChange={(e) => updatePersonalInfo("website", e.target.value)}
                placeholder="johndoe.com"
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Label>Professional Summary</Label>
              <Textarea
                value={data.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                placeholder="A brief summary of your professional background and key achievements..."
                className="mt-1 min-h-[100px]"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="p-4 rounded-lg bg-secondary/50 border border-border space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Experience {index + 1}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                  className="h-8 w-8 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    placeholder="Company Name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Position</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                    placeholder="Job Title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    placeholder="Jan 2020"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    placeholder="Dec 2023"
                    disabled={exp.current}
                    className="mt-1"
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox
                    id={`current-${exp.id}`}
                    checked={exp.current}
                    onCheckedChange={(checked) => updateExperience(exp.id, "current", checked as boolean)}
                  />
                  <Label htmlFor={`current-${exp.id}`} className="cursor-pointer">
                    I currently work here
                  </Label>
                </div>
                <div className="col-span-2">
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                    placeholder="Describe your responsibilities and achievements..."
                    className="mt-1 min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          ))}
          <Button onClick={addExperience} variant="outline" className="w-full gap-2">
            <Plus className="h-4 w-4" />
            Add Experience
          </Button>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={edu.id} className="p-4 rounded-lg bg-secondary/50 border border-border space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Education {index + 1}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                  className="h-8 w-8 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label>School</Label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                    placeholder="University Name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Degree</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    placeholder="Bachelor's"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Field of Study</Label>
                  <Input
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                    placeholder="Computer Science"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                    placeholder="2016"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                    placeholder="2020"
                    className="mt-1"
                  />
                </div>
                <div className="col-span-2">
                  <Label>GPA (optional)</Label>
                  <Input
                    value={edu.gpa || ""}
                    onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                    placeholder="3.8"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          ))}
          <Button onClick={addEducation} variant="outline" className="w-full gap-2">
            <Plus className="h-4 w-4" />
            Add Education
          </Button>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={skill.id} className="flex gap-4 items-end">
              <div className="flex-1">
                <Label>Skill {index + 1}</Label>
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  placeholder="e.g., JavaScript, Project Management"
                  className="mt-1"
                />
              </div>
              <div className="w-40">
                <Label>Level</Label>
                <Select
                  value={skill.level}
                  onValueChange={(value) => updateSkill(skill.id, "level", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSkill(skill.id)}
                className="h-10 w-10 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button onClick={addSkill} variant="outline" className="w-full gap-2">
            <Plus className="h-4 w-4" />
            Add Skill
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeForm;
