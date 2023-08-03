interface IProps {
  title: string;
}

export default function SectionTitleTop (props: IProps) {
  const { title } = props;

  return (
    <div className="mb-5">
      <h5 className="mb-3 text-secondary">
        {title}
      </h5>
      <hr />
    </div>
  )
}