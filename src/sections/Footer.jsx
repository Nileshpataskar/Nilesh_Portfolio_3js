const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Nileshpataskar" target="_blank">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/nilesh-pataskar-96a6441b1/" target="_blank">
          <div className="social-icon">
            <img src="/assets/lin.png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/__nilesh_pataskar__/" target="_blank">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">Made by Nilesh Pataskar (8888082914)</p>
    </footer>
  );
};

export default Footer;
