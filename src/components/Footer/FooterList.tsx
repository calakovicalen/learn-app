interface FooterListProps {
  heading: string;
  list: string[];
}

function FooterList(props: FooterListProps) {
  const { heading, list } = props;

  return (
    <div className="text-center">
      <h5 className="text-xl mb-4 font-montserrat font-bold text-neutral-900">
        {heading}
      </h5>
      <ul className="flex flex-col gap-3">
        {list.map((item, index) => (
          <li key={index} className="text-sm font-poppins text-neutral-900">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
