const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-orange mb-8">
          Meet Our Team
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Biografía del Fundador</h2>
          {/* Contenido de biografía */}
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Presentación de Neurospsychología Integral como Partnership
          </h2>
          {/* Contenido de partnership */}
        </div>
      </div>
    </div>
  );
};

export default Team;