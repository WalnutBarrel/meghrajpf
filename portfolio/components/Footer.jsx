export default function Footer() {
  return (
    <footer className="text-center mt-24 py-10 border-t border-white/10 text-sm text-zinc-400">
      <p className="mb-2">© {new Date().getFullYear()} Meghrajsinh J Solanki</p>

      <div className="flex justify-center gap-5 mt-3">
        <a href="https://www.linkedin.com/in/meghraj-solanki-0003a639b/" target="_blank" className="hover:text-primary">
          LinkedIn
        </a>

        <a href="https://www.instagram.com/megh_0215/" target="_blank" className="hover:text-primary">
          Instagram
        </a>

        <a href="mailto:meghrajsinhsolanki36@gmail.com" className="hover:text-primary">
          Email
        </a>

        <a href="/resume.pdf" className="hover:text-primary">Resume</a>
      </div>
    </footer>
  );
}
