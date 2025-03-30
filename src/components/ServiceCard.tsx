
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlinkingText from './BlinkingText';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isHot?: boolean;
}

const ServiceCard = ({ title, description, icon, isHot = false }: ServiceCardProps) => {
  return (
    <Card className="border-4 border-dashed border-hot-pink bg-electric-blue hover:shadow-lg hover:scale-105 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 font-comic text-xl">
          {icon && <div className="text-hot-pink">{icon}</div>}
          <div>
            {title} 
            {isHot && <BlinkingText className="ml-2 text-red-600 font-bold">HOT!</BlinkingText>}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="font-comic">
        <p className="text-black">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
