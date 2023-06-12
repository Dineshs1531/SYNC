let slideIndex=0;
showSlides();

function showSlides()
{
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex=1
    }
    for(i = 0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className +=" active";
    setTimeout(showSlides, 4000);
}



const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        
        

        if(count < target)
        {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }
        else{
            count.innerText = target;
        }

        /*console.log(inc);*/
    }

    updateCount();
})
