export default function CheckoutSummaryService({selectedService}) {
  if (!selectedService) {
    return <></>;
  }

  const {name, description} = selectedService;

  return (
    <>
      <div className="flex items-center gap-1 text-stone-600">
        <h1>{name}</h1>
        <p>({description})</p>
      </div>
    </>
  );
}
