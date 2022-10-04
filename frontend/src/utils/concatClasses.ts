type ConcatClasses = (...classes: (string | undefined | false)[]) => string;

const concatClasses: ConcatClasses = (...classes) => {
  return classes
    .filter((cl) => !!cl)
    .join(" ")
    .trim();
};

export default concatClasses;
