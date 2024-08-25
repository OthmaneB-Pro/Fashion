import ImageContainer from "./ImageContainer";
import Description from "./Description";

type ItemCardType = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export default function ItemCard({ src, alt, title, text }: ItemCardType) {
  return (
    <div>
      <ImageContainer src={src} alt={alt} />
      <Description title={title} text={text} />
    </div>
  );
}
