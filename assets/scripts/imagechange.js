function swapBanner()
	{
	if(window.outerWidth>1296)
		{if(document.getElementById)
			{
			var title=document.getElementById("title"); var titlePath="assets/banners/banner"+Math.floor(Math.random() * 12 + 1)+".png"; title.style.background="url("+titlePath+") top right no-repeat ";
			var banner=document.getElementById("banner"); banner.style.background="transparent none";
			var sidelogo=document.getElementById("sidelogo"); var sidePath="assets/images/sidelogos/sidelogo"+Math.floor(Math.random() * 17 + 1)+".png"; sidelogo.style.background="url("+sidePath+")";
			var sidelogoright=document.getElementById("sidelogo-right"); var sidePathright="assets/images/sidelogos-right/sidelogo-right"+Math.floor(Math.random() * 2 + 1)+".png"; sidelogoright.style.background="url("+sidePathright+")";
			}			 
		}
	else
		{if(document.getElementById)
			{
			var banner=document.getElementById("banner"); var banPath="assets/banners/banner"+Math.floor(Math.random() * 12 + 1)+".jpg"; banner.style.background="url("+banPath+") no-repeat scroll 100% ";
			var title=document.getElementById("title"); title.style.background="transparent none";
			var sidelogo=document.getElementById("sidelogo"); var sidePath="assets/images/sidelogos/sidelogo"+Math.floor(Math.random() * 17 + 1)+".png"; sidelogo.style.background="url("+sidePath+")";		 
			var sidelogoright=document.getElementById("sidelogo-right"); var sidePathright="assets/images/sidelogos-right/sidelogo-right"+Math.floor(Math.random() * 2 + 1)+".png"; sidelogoright.style.background="url("+sidePathright+")";
			}
		}
	}	