import Hero3D from "@/components/Hero3D";
import About3D from "@/components/About3D";
import Portfolio3D from "@/components/Portfolio3D";
import Contact3D from "@/components/Contact3D";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero3D />
      <About3D />
      <Portfolio3D />
      <Contact3D />
    </div>
  );
};

export default Index;
