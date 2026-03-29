import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
    };

    try {
      // Send to Admin
      await emailjs.send(
        "service_5kw421j",
        "template_x25z599",
        formData,
        "WIjfd_siVXjHEJd2I"
      );

      // Auto reply to user
      await emailjs.send(
        "service_5kw421j",
        "template_afupbsi",
        formData,
        "WIjfd_siVXjHEJd2I"
      );

      toast.success("Message sent successfully 🚀");

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/contact-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <motion.div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              
              <div className="p-3 rounded-xl bg-primary/10">
                
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                
                <h3 className="font-heading font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm">
                  sales@probizenergy.com
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              
              <div className="p-3 rounded-xl bg-primary/10">
                
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                
                <h3 className="font-heading font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">
                  +91 99000 29602
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              
              <div className="p-3 rounded-xl bg-primary/10">
                
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                
                <h3 className="font-heading font-bold mb-1">
                  Our Locations
                </h3>
                <p className="text-muted-foreground text-sm">
                  Bengaluru, Hosur, Coimbatore, Chennai, Trichy, Madurai, Nellai
                  & Nagercoil.
                </p>
              </div>
            </div>
          </motion.div>
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3"
              />

              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3"
              />
            </div>

            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3"
            />

            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your energy needs..."
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;