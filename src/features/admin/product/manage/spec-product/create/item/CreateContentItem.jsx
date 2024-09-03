export default function CreateContentItem({item}) {
  console.log(item);

  const data = item.SpecProduct;

  return (
    <div className="flex items-center gap-2">
      {data.value && (
        <div>
          <h4>{data.value}</h4>
          <span className="flex justify-center items-center">x</span>
        </div>
      )}
      <h4>{data.text}</h4>
    </div>
  );
}
