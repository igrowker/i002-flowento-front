import { FaShareAlt } from "react-icons/fa";

const ButtonShare = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Chequea este evento!",
          url: window.location.href,
        })
        .catch((error) => console.error("Error compartiendo:", error));
    } else {
      const shareUrl = window.location.href;
      const encodedUrl = encodeURIComponent(shareUrl);
      const shareText = encodeURIComponent("Chequea este evento!");

      const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${shareText}`,
        whatsapp: `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`,
      };

      window.open(urls.facebook, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button onClick={handleShare}>
      <FaShareAlt className="text-xl transition-transform duration-300 hover:scale-125 md:text-3xl text-orangeprimary hover:text-orange-600" />
    </button>
  );
};

export default ButtonShare;
