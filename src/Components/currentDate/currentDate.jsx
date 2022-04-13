const CurrentDate = () => {
  const giveDate = new Date().toLocaleDateString("fr-fr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <h2>{giveDate}</h2>
    </>
  );
};
export default CurrentDate;
