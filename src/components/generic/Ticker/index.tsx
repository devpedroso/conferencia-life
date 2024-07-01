const Ticker = ({ src }) => {
  return (
    <div
      className="image-repeat h-8"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

export default Ticker;
