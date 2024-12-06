import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

// Initialize EmailJS with your user ID
emailjs.init('njHD48xNl8tkUu47J'); // Ensure this is correct

const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
    serviceId: string;
    templateId: string;
    userId: string;
}

export function ContactForm({ serviceId, templateId, userId }: ContactFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

   const onSubmit = async (data: ContactFormData) => {
    const emailData = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
    };

    try {
        console.log('Sending data:', emailData);
        console.log(serviceId, templateId, emailData, userId);
        const response = await emailjs.send(serviceId, templateId, emailData, userId);
        console.log('Email sent successfully:', response);
        toast.success('Message sent successfully!');
        reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
        // toast.error(`Failed to send message. ${error?.text || error.message}`);
    }
};


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                </label>
                <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground p-3 focus:border-accent focus:ring focus:ring-accent/20"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                </label>
                <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground p-3 focus:border-accent focus:ring focus:ring-accent/20"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground p-3 focus:border-accent focus:ring focus:ring-accent/20"
                ></textarea>
                {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
