import React from 'react';
import style from "../styles/index.module.css";

const Index = () =>
{
  return (
    <div className={ style.indexContainer }>
      <div className={style.headingContainer}>
        <h1>This is a really dope note taking app.</h1>
      </div>
    </div>
  );
};

export default Index;