export default function Footer() {
  return (
    <>
      <footer class="bg-cover flex flex-col min-h-30svh relative justify-center items-center header-bg">
        <div class="container text-white text-center grid gap-1">
          <p>234/80-UFG, New Street, Switzerland.</p>
          <p>Call: +67-098-907-1269</p>
          <p>Email: info@yourdomain.com</p>
        </div>
        <small class="text-white absolute bottom-0 mb-5 text-xs italic">
          Copyright&copy; 2023 - {new Date().getFullYear()} | Made by
          <a href="https://benthorpe.dev" class="text-teal ml-1 font-bold tracking-wider">Sparrow</a>
        </small>
      </footer>
    </>
  );
}
