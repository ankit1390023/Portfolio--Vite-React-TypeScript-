import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
    email: string;
    phone: string;
    location: string;
}

export function ContactInfo({ email, phone, location }: ContactInfoProps) {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>

            <div className="flex items-center space-x-4">
                <Mail className="text-accent h-5 w-5" />
                <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href={`mailto:${email}`} className="text-foreground/80 hover:text-accent transition-colors">
                        {email}
                    </a>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <Phone className="text-accent h-5 w-5" />
                <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href={`tel:${phone}`} className="text-foreground/80 hover:text-accent transition-colors">
                        {phone}
                    </a>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <MapPin className="text-accent h-5 w-5" />
                <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-foreground/80">{location}</p>
                </div>
            </div>
        </div>
    );
}