function Footer() {
  return (
    <footer class="bg-booksbg shadow mt-5">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm font-medium text-secondary sm:text-center ">
          © 2023{" "}
          <a href="https://.com/" className="hover:underline">
            kiताbe
          </a>
          . All Rights Reserved.
        </span>

        <a
          href="https://www.linkedin.com/in/divya-motghare-242278200/"
          className="hover:underline text-secondary font-medium"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
