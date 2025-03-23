
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingButtonProps {
  className?: string;
  fullWidth?: boolean;
  large?: boolean;
}

const BookingButton: React.FC<BookingButtonProps> = ({
  className = '',
  fullWidth = false,
  large = false,
}) => {
  return (
    <Link
      to="/contact"
      className={cn(
        "inline-flex items-center justify-center bg-hotel-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90 hover:translate-y-[-2px] shadow-md group",
        large ? "text-lg px-8 py-3" : "px-6 py-2.5",
        fullWidth ? "w-full" : "",
        className
      )}
    >
      Book Your Stay
      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={large ? 20 : 16} />
    </Link>
  );
};

export default BookingButton;
