import pdfFile from '../../assets/cv_2022_02.pdf';

const CV = () => {
  return (
    <div >
      <h1>Curriculum Vitae</h1>
      <object data={pdfFile} type="application/pdf" width="100%" height="800px"><p>Alternative text - include a link <a href={pdfFile}>to the PDF!</a></p></object>
    </div>
  );
};

export default CV;