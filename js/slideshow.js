   $(document).ready(function(){
            //slide
            $('.slideshow').cycle({ 
             fx: 'scrollDown',
             delay: -2000,
             pause:   1
            });

            //
            $('.slideshow img').hover(function(){
                $(this).attr('title','click to enlarge!')
            });
            //
            $('.slideshow img').click(function(){
                var imgurl=$(this).attr('src');
                window.open(imgurl,"showpic","width=800,height=400");
            });
    });