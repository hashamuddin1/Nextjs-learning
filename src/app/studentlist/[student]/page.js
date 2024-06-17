export default function page({ params }) {
  console.log(params);
  return (
    <>
      <h1>Student Detail</h1>
      <p>{params.student}</p>
    </>
  );
}
