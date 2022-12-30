import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element | string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "",
    description: "",
  },
  {
    title: "Made for developers from truly yours! <3",
    description: (
      <>
        This project aims to increase knowledge by sharing all of the wonderful
        resources and it is regularly updated.
      </>
    ),
  },
  {
    title: "",
    description: "",
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'></div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
