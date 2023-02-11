const TopButton = () => {

  const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
  }

  return (
    <button className="fixed bottom-0 right-0 p-2 sm:p-3 text-white text-sm bg-primary hover:opacity-90 md:hidden" onClick={() => scrollToTop() }>TOP</button>
  )
}

export default TopButton;
