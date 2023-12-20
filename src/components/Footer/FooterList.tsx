interface FooterListProps {
  heading: string;
  list: string[];
}

function FooterList(props: FooterListProps) {
  const { heading, list } = props;

  return (
    <div className="text-center xl:self-start xl:text-left">
      <h5 className="font-heading mb-s5 text-t6 font-bold text-neutral-900">
        {heading}
      </h5>
      <ul className="gap-s4 flex flex-col">
        {list.map((item, index) => (
          <li
            key={index}
            className="font-body text-t3 cursor-pointer text-neutral-900 hover:text-neutral-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
