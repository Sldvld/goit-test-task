import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="30"
      width="30"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e6d4ff', '##3ca181', '#471ca9', '#d9b1ff', '#5cd3a8']}
    />
  );
}
