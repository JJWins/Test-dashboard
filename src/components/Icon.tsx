const Icon = (props) => {
    const { path, alt, size = 24, classname="" } = props;
    return (
      <>
        <img
          className={classname + " pointer"}
          src={path}
          alt={alt}
          style={{ width: size, height: size}}
        />
      </>
    );
  };
  
  export default Icon;
  