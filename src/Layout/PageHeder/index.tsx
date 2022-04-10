

type IPageHeaderProps = {
    title: string
}

const PageHeader = ({
  title
}: IPageHeaderProps) => {
  return (
   <>
   <h1>{title}</h1>
   </>
  )
}

export default PageHeader;