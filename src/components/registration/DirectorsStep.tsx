
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

type Partner = {
  fullName: string;
  nationality: string;
  idNumber: string;
  address: string;
  sharePercentage: string;
};

type Director = {
  fullName: string;
  nationality: string;
  role: string;
};

type DirectorsStepProps = {
  form: UseFormReturn<any>;
};

export const DirectorsStep = ({ form }: DirectorsStepProps) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [directors, setDirectors] = useState<Director[]>([]);
  const [currentPartner, setCurrentPartner] = useState<Partner>({
    fullName: "",
    nationality: "",
    idNumber: "",
    address: "",
    sharePercentage: ""
  });
  const [currentDirector, setCurrentDirector] = useState<Director>({
    fullName: "",
    nationality: "",
    role: ""
  });

  const addPartner = () => {
    setPartners([...partners, currentPartner]);
    setCurrentPartner({
      fullName: "",
      nationality: "",
      idNumber: "",
      address: "",
      sharePercentage: ""
    });
  };

  const addDirector = () => {
    setDirectors([...directors, currentDirector]);
    setCurrentDirector({
      fullName: "",
      nationality: "",
      role: ""
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-6">أسماء الشركاء</h3>
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-5 gap-4">
            <Input
              placeholder="الاسم الكامل"
              value={currentPartner.fullName}
              onChange={(e) => setCurrentPartner({ ...currentPartner, fullName: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="الجنسية"
              value={currentPartner.nationality}
              onChange={(e) => setCurrentPartner({ ...currentPartner, nationality: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="رقم الهوية أو الجواز"
              value={currentPartner.idNumber}
              onChange={(e) => setCurrentPartner({ ...currentPartner, idNumber: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="العنوان"
              value={currentPartner.address}
              onChange={(e) => setCurrentPartner({ ...currentPartner, address: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="نسبة المساهمة"
              value={currentPartner.sharePercentage}
              onChange={(e) => setCurrentPartner({ ...currentPartner, sharePercentage: e.target.value })}
              className="text-right"
            />
          </div>
          <Button type="button" onClick={addPartner} className="mr-auto block">
            إضافة شريك
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">الاسم الكامل</TableHead>
              <TableHead className="text-right">الجنسية</TableHead>
              <TableHead className="text-right">رقم الهوية أو الجواز</TableHead>
              <TableHead className="text-right">العنوان</TableHead>
              <TableHead className="text-right">نسبة المساهمة</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners.map((partner, index) => (
              <TableRow key={index}>
                <TableCell className="text-right">{partner.fullName}</TableCell>
                <TableCell className="text-right">{partner.nationality}</TableCell>
                <TableCell className="text-right">{partner.idNumber}</TableCell>
                <TableCell className="text-right">{partner.address}</TableCell>
                <TableCell className="text-right">{partner.sharePercentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">المفوضون بإدارة الشركة</h3>
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <Input
              placeholder="الاسم الكامل"
              value={currentDirector.fullName}
              onChange={(e) => setCurrentDirector({ ...currentDirector, fullName: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="الجنسية"
              value={currentDirector.nationality}
              onChange={(e) => setCurrentDirector({ ...currentDirector, nationality: e.target.value })}
              className="text-right"
            />
            <Input
              placeholder="الصفة"
              value={currentDirector.role}
              onChange={(e) => setCurrentDirector({ ...currentDirector, role: e.target.value })}
              className="text-right"
            />
          </div>
          <Button type="button" onClick={addDirector} className="mr-auto block">
            إضافة مدير
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">الاسم الكامل</TableHead>
              <TableHead className="text-right">الجنسية</TableHead>
              <TableHead className="text-right">الصفة</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {directors.map((director, index) => (
              <TableRow key={index}>
                <TableCell className="text-right">{director.fullName}</TableCell>
                <TableCell className="text-right">{director.nationality}</TableCell>
                <TableCell className="text-right">{director.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
