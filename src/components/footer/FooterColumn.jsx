import FooterTitle from './FooterTitle';
function FooterColumn({ children, title }) {
  //write code here

  return (
    <>
      <FooterTitle text={title} />
      {children}
    </>
  );
}

export default FooterColumn;
