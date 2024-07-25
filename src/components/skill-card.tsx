import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
interface SkillCardProps {
  title: string;
  icon: StaticImageData;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-28 w-28 place-items-center rounded-full bg-gray-200  text-white shadow">
          <Image width={130} height={130} src={Icon} />
        </div> 
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
