//1.push changes by, team-commit&push
//2.push changes by, team-commit/Team-Repository-PushToUpstream
console.log("Facebook -Highlighter Extension !!!");

window.onload = function() {
	console.log("OnLoad");

	var words = [];

	//words.push('job', 'pharmacist', 'area', 'acordar', 'porn', 'sex', 'adult', 'Canton', 'whilst');
	//words.push('NCAAF', 'Spring Pharmacy');
	//words.push('Barnhill', 'Lessons/Writing', 'NO_NEED_FOR_REVIEW');

	//var videos = ['Liposuction', 'Kybella', 'Double chin', 'Lipo', 'Bairartic', 'coolsculpting', 'cellulite', 'Liposonics', 'lean ', 'thin', 'Obesity', 'Fat loss', 'reduce ', 'Fat', 'Weight Loss', 'weight management', 'weight gain', 'weight', 'Burn', 'Burn fat', 'sculpting', 'sculpt', 'Trim', 'Muffin top', 'Love handles', 'belly fat', 'inches', 'Pounds', 'lbs', 'kgs', 'sizes', 'cms', 'shape', 'Ant waist', 'Obese', 'cheek reduction', 'slim', 'get rid', 'firm', 'Ultrasonic cavitation', 'wrinkle', 'freckles', 'Anti aging', 'Dark spots', 'Black heads', 'Acne', 'pores', 'Pimple', 'Hair removal', 'Serum', 'Rejuvenation', 'scar', 'mask', 'stretch marks', 'Blemish', 'wax', 'Rhinoplastic', 'cirugia', 'surgery', 'implant', 'circumsion', 'cataract', 'Eye lid', 'Augmentation', 'Plastic', 'Cosmetic surgery', 'silicon', 'colon', 'stent', 'Plasty', 'Blepharo ', 'Transplant', 'IPL', 'Laser', 'Lazer', 'Lasik', 'Botox', 'Botullinium Toxin', 'Botok', 'vitamins', 'capsules', 'Tablets', 'Drink', 'Whey', 'Drops', 'fillers', 'Injections', 'supplement', 'Injectibles', 'white', 'Documentary', 'Single cover', 'New song', 'Album', 'short film', 'New single', 'Debut', 'episodes', 'webseries', 'webisodes', 'Official video', 'series', 'Box Office', 'MicroPigmentation', 'Microblading', 'Eyelash', 'Permanent Makeup', 'eyebrow' ];
	//var liveVideos = ['Balls', 'Bastard', 'Bitch', 'Blowjob', 'Bollocks', 'Boner', 'Butthole', 'Chink', 'Clit', 'Cock', 'Coon', 'Cracker', 'Cunnilingus', 'Cunt', 'Deep throat', 'Dick', 'Dildo', 'Dink', 'Dothead', 'Downie', 'Durka', 'Dyke', 'Ejaculate', 'Faggot', 'Fellatio', 'Fisting', 'Fuck', 'Fudge Packer', 'Gangbang', 'Gook', 'Handjob', 'Hoe', 'Horny', 'Jack off', 'Jap', 'Kyke', 'Masturbate', 'Muff', 'Nigger', 'Penis', 'Piss', 'Porn/pornography', 'Prostitute', 'Pube', 'Pussy', 'Retard', 'Rim job', 'Rimming', 'Schlong', 'Scrotum', 'Semen', 'Sex', 'Shag', 'Skank', 'Slant Eye', 'Slut', 'Snatch', 'Spunk', 'Tar Bar', 'Testicle', 'Tit', 'Tosser', 'Tranny', 'Twat', 'Vagina', 'Vulva', 'Wang', 'Wank', 'Whore'];
	//var pages = ['Adult products/services', 'Pornography', 'license number', 'marijuana', 'escort sex free', 'call girls', 'offensive black white', 'deceptive', 'fraudulent', 'misleading', 'Scam', 'Financial Info, Govt. ID#s', 'Personal Information', 'Overtly sexualized positioning', 'Illegal products, drugs or services', 'Political leanings', 'Ethinicity', 'Religion', 'Discrimination', 'Joke Posts/Insufficient Info', 'Nudity', 'Vimax', 'bondage', 'cock ring', 'capsules', 'viagara', 'penis'];
	//var commerce = ['hemp', 'whey', 'weight loss', 'dietary supplement', 'HGH', 'HCG', 'melatonin', 'cbd', 'tobacco', 'alcohol', 'wine', 'capsules', 'tablets', 'sexual', 'pleasure', 'adult', 'bullets', 'herbal supplements', 'vape', 'mod', 'whisky', 'corset', 'looking', 'tickets', 'promotion', 'auction', 'e-cig', 'sale', 'fish', 'rent', 'trade', 'selling', 'kitten', 'dog', 'snake', 'need', 'buy', 'Weight', 'loss', 'Slim', 'Vegicaps', 'Softgels', 'Veggie', 'Caps', 'Caplets', 'Calorie-Burning', 'Diet', 'Liquid', 'Soft-Gels', 'supplement', 'promote', 'hunt', 'sex', 'busco', 'seeking', 'dope', 'pot', 'ganja', 'cannabis', 'mary', 'stinkweed', 'nuggets', 'reefer', 'weed', 'coke', 'flake', 'blow', 'toot', 'Vcaps', 'Vegancaps', 'Slimming', 'tabs', 'Supplements', 'lose', 'Vineyards', 'Vodka', 'Malt', 'pills', 'Rental', 'Porn', 'Pepper', 'Kittens', 'Puppy', 'firearms', 'fireworks', 'tasers', 'nunchuck', 'ammunition', 'paintball', 'guns', 'steroids', 'chitosan', 'comfrey', 'dehydroepiandrosterone', 'ephedra', 'growth', 'Catuaba', 'Fuco', 'Hybeauty', 'Hyli', 'Qlimax', 'pheromones', 'beer', 'rum', 'revolver', 'knives', 'cloud', 'RDA', 'smok', 'bow', 'swaps', 'swap', 'trades', 'anyone', 'cat ', 'ticket', 'arms', 'pistol', 'pistols', 'grenade', 'Knife', 'anabolic steriod', 'massager', 'contains', 'consists', 'vibrator', 'BCAAs', 'metabolism', 'cigars', 'chewing tobacco', 'tobacco pipes', 'hookah', 'lounges', 'rolling papers', 'vaporized tobacco', 'delivery', 'devices', 'shisha', 'lube', 'electronic cigarettes', 'Vaporizer', 'human chorionic gonadotropin', 'DHEA', '24-Hour Miracle Diet Temporary Weight Management', 'Anabolism', 'including limited', 'libido enhancement non-surgical breast enlargement', 'pheromone', 'Promotes Sexual Energy', 'Vegetarian Capsules', 'lubricant', 'anabolic steroids', 'Body shapers corsets Spanx', 'fat loss', 'Cocaine', 'BlackRock', 'Marijuana', 'Ganga', 'Blunt', 'Mary Jane', 'Buds', 'erone', 'human growth hormones', 'dietary', 'ABV', 'lubricated', 'lubricate', 'lubrication', 'slims', 'reduce', 'size', 'shaper', 'shape', 'Corsets ', 'fat', 'oil', 'fragrance', 'BCAA', 'Protein', 'Isolate', 'conjugated linoleic acid', 'Body shapers ', 'Glutamine', 'Black Rock', 'massage', ' increases sperm', 'erotic', 'stronger', 'erections', 'Amino', 'testosterone', 'Vacuum', ' phytocannabinoid ', 'dank', 'tetrahydrocannabinol', 'nugs', 'kind bud', 'CANNABINOIDS', 'bud', 'high', 'stoned', 'dabs', 'legalize', 'Spanx', 'dehydroepiandrosterone (DHEA)', 'ibuprofen', 'shapers', 'pepper spray', 'shapewear', 'anabolic'];
	//var commerce_gun_brands = ['Remington 28" versamax', '22 Long Rifle Copper', 'Bone Collector Hunter .22', 'Magpul Moe Ak Handguard Ak47-74 Fde', 'P-Series Sig pistols', 'Aac Piston Ti-rant 45 M13.5x1lh 9mm', 'Zev Flcrm Ult 40sw For Gen4 Black-red', '10734 PakLite Field Master Kit, RT Sheath', 'AK47 ', 'Beeman air gun', 'Gurkha Kukri Machete -37-913', 'Backwoods Choppers Machete -37-87', 'Enfield #4 Spike Bayonet with Metal Scabbard -15-22', 'Sabre 800,000 Volt Stun Gun -12-212', 'Axe & Hunting Knife Survival Combo -37-140', 'FX-3 6x42mm Matte Wide Duplex', 'Benjamin Sheridan Titan NP Synthetic Hunting Rifle 4x32 Scope .22', 'Benjamin Sheridan Bulldog,.357 Caliber,Rifled/Shrouded Barrel,Realtree Xtra', 'Barska Optics Red Dot', 'Humvee Tactical Recon Folder #8 -15-018', 'Long M-1 Bayonet With Scabbard -15-297', 'Bg Choke Tube T-wrench 20ga.', 'Para Ordnance P14 Rub Grips w/FG Blk', 'STRIKE INDUSTRIES AR ENHANCED ULTIMATE DUST COVER 223 CAPSULE - FDE', 'Benjamin Sheridan Steel Eagle NP2 Synthetic Hunting Rifle w/3-9x32 Scope .22', 'AK IF Handguard, Quad Rail, DE', 'Tanto Bayonet With Drop Leg Sheath -15-212', 'Stun Gun Pen -12-24', 'Benjamin Sheridan Trail NP Pistol', 'Benjamin Sheridan Discovery Dual Fuel Bolt Action Rifle', 'SPRINGFIELD 9MM RANGE OFC 5″ 9RD PKRZD', 'Ruger 77 MKII SA Hvy Brl BB Stk', '7.2" TRX 308 Extreme ARMALITE BLK', 'Barnett Cross Scope w/Rings 4X32mm Multi-Ret 17060', 'Sig P220/p226 ', 'WW2 German Kar98K Bayonet S84/98', 'Lg-406 Laserguard For Smith & Wesson Sigma Full-size', 'Glock 27 40 S&w ', 'Kaspa 4-16x44mm Ballistic-x', 'Daisy 177 Cal Pellet Rifle 901', 'Valken CODE 68 Caliber'];
	
	var videos = [' Liposuction ', ' Kybella ', ' Double chin ', ' Lipo ', ' Bairartic ', ' coolsculpting ', ' cellulite ', ' Liposonics ', ' lean ', 'thin ', ' Obesity ', ' Fat loss ', ' reduce ', 'Fat ', ' Weight Loss ', ' weight management ', ' weight gain ', ' weight ', ' Burn ', ' Burn fat ', ' sculpting ', ' sculpt ', ' Trim ', ' Muffin top ', ' Love handles ', ' belly fat ', ' inches ', ' Pounds ', ' lbs ', ' kgs ', ' sizes ', ' cms ', ' shape ', ' Ant waist ', ' Obese ', ' cheek reduction ', ' slim ', ' get rid ', ' firm ', ' Ultrasonic cavitation ', ' wrinkle ', ' freckles ', ' Anti aging ', ' Dark spots ', ' Black heads ', ' Acne ', ' pores ', ' Pimple ', ' Hair removal ', ' Serum ', ' Rejuvenation ', ' scar ', ' mask ', ' stretch marks ', ' Blemish ', ' wax ', ' Rhinoplastic ', ' cirugia ', ' surgery ', ' implant ', ' circumsion ', ' cataract ', ' Eye lid ', ' Augmentation ', ' Plastic ', ' Cosmetic surgery ', ' silicon ', ' colon ', ' stent ', ' Plasty ', ' Blepharo ', 'Transplant ', ' IPL ', ' Laser ', ' Lazer ', ' Lasik ', ' Botox ', ' Botullinium Toxin ', ' Botok ', ' vitamins ', ' capsules ', ' Tablets ', ' Drink ', ' Whey ', ' Drops ', ' fillers ', ' Injections ', ' supplement ', ' Injectibles ', ' white ', ' Documentary ', ' Single cover ', ' New song ', ' Album ', ' short film ', ' New single ', ' Debut ', ' episodes ', ' webseries ', ' webisodes ', ' Official video ', ' series ', ' Box Office ', ' MicroPigmentation ', ' Microblading ', ' Eyelash ', ' Permanent Makeup ', ' eyebrow ' ];
	var liveVideos = [' Balls ', ' Bastard ', ' Bitch ', ' Blowjob ', ' Bollocks ', ' Boner ', ' Butthole ', ' Chink ', ' Clit ', ' Cock ', ' Coon ', ' Cracker ', ' Cunnilingus ', ' Cunt ', ' Deep throat ', ' Dick ', ' Dildo ', ' Dink ', ' Dothead ', ' Downie ', ' Durka ', ' Dyke ', ' Ejaculate ', ' Faggot ', ' Fellatio ', ' Fisting ', ' Fuck ', ' Fudge Packer ', ' Gangbang ', ' Gook ', ' Handjob ', ' Hoe ', ' Horny ', ' Jack off ', ' Jap ', ' Kyke ', ' Masturbate ', ' Muff ', ' Nigger ', ' Penis ', ' Piss ', ' Porn/pornography ', ' Prostitute ', ' Pube ', ' Pussy ', ' Retard ', ' Rim job ', ' Rimming ', ' Schlong ', ' Scrotum ', ' Semen ', ' Sex ', ' Shag ', ' Skank ', ' Slant Eye ', ' Slut ', ' Snatch ', ' Spunk ', ' Tar Bar ', ' Testicle ', ' Tit ', ' Tosser ', ' Tranny ', ' Twat ', ' Vagina ', ' Vulva ', ' Wang ', ' Wank ', ' Whore '];
	var pages = [' Adult products/services ', ' Pornography ', ' license number ', ' marijuana ', ' escort sex free ', ' call girls ', ' offensive black white ', ' deceptive ', ' fraudulent ', ' misleading ', ' Scam ', ' Financial Info, Govt. ID#s ', ' Personal Information ', ' Overtly sexualized positioning ', ' Illegal products, drugs or services ', ' Political leanings ', ' Ethinicity ', ' Religion ', ' Discrimination ', ' Joke Posts/Insufficient Info ', ' Nudity ', ' Vimax ', ' bondage ', ' cock ring ', ' capsules ', ' viagara ', ' penis '];
	var commerce = [' hemp ', ' whey ', ' weight loss ', ' dietary supplement ', ' HGH ', ' HCG ', ' melatonin ', ' cbd ', ' tobacco ', ' alcohol ', ' wine ', ' capsules ', ' tablets ', ' sexual ', ' pleasure ', ' adult ', ' bullets ', ' herbal supplements ', ' vape ', ' mod ', ' whisky ', ' corset ', ' looking ', ' tickets ', ' promotion ', ' auction ', ' e-cig ', ' sale ', ' fish ', ' rent ', ' trade ', ' selling ', ' kitten ', ' dog ', ' snake ', ' need ', ' buy ', ' Weight ', ' loss ', ' Slim ', ' Vegicaps ', ' Softgels ', ' Veggie ', ' Caps ', ' Caplets ', ' Calorie-Burning ', ' Diet ', ' Liquid ', ' Soft-Gels ', ' supplement ', ' promote ', ' hunt ', ' sex ', ' busco ', ' seeking ', ' dope ', ' pot ', ' ganja ', ' cannabis ', ' mary ', ' stinkweed ', ' nuggets ', ' reefer ', ' weed ', ' coke ', ' flake ', ' blow ', ' toot ', ' Vcaps ', ' Vegancaps ', ' Slimming ', ' tabs ', ' Supplements ', ' lose ', ' Vineyards ', ' Vodka ', ' Malt ', ' pills ', ' Rental ', ' Porn ', ' Pepper ', ' Kittens ', ' Puppy ', ' firearms ', ' fireworks ', ' tasers ', ' nunchuck ', ' ammunition ', ' paintball ', ' guns ', ' steroids ', ' chitosan ', ' comfrey ', ' dehydroepiandrosterone ', ' ephedra ', ' growth ', ' Catuaba ', ' Fuco ', ' Hybeauty ', ' Hyli ', ' Qlimax ', ' pheromones ', ' beer ', ' rum ', ' revolver ', ' knives ', ' cloud ', ' RDA ', ' smok ', ' bow ', ' swaps ', ' swap ', ' trades ', ' anyone ', ' cat ', 'ticket ', ' arms ', ' pistol ', ' pistols ', ' grenade ', ' Knife ', ' anabolic steriod ', ' massager ', ' contains ', ' consists ', ' vibrator ', ' BCAAs ', ' metabolism ', ' cigars ', ' chewing tobacco ', ' tobacco pipes ', ' hookah ', ' lounges ', ' rolling papers ', ' vaporized tobacco ', ' delivery ', ' devices ', ' shisha ', ' lube ', ' electronic cigarettes ', ' Vaporizer ', ' human chorionic gonadotropin ', ' DHEA ', ' 24-Hour Miracle Diet Temporary Weight Management ', ' Anabolism ', ' including limited ', ' libido enhancement non-surgical breast enlargement ', ' pheromone ', ' Promotes Sexual Energy ', ' Vegetarian Capsules ', ' lubricant ', ' anabolic steroids ', ' Body shapers corsets Spanx ', ' fat loss ', ' Cocaine ', ' BlackRock ', ' Marijuana ', ' Ganga ', ' Blunt ', ' Mary Jane ', ' Buds ', ' erone ', ' human growth hormones ', ' dietary ', ' ABV ', ' lubricated ', ' lubricate ', ' lubrication ', ' slims ', ' reduce ', ' size ', ' shaper ', ' shape ', ' Corsets ', 'fat ', ' oil ', ' fragrance ', ' BCAA ', ' Protein ', ' Isolate ', ' conjugated linoleic acid ', ' Body shapers ', 'Glutamine ', ' Black Rock ', ' massage', ' increases sperm ', ' erotic ', ' stronger ', ' erections ', ' Amino ', ' testosterone ', ' Vacuum', ' phytocannabinoid ', 'dank ', ' tetrahydrocannabinol ', ' nugs ', ' kind bud ', ' CANNABINOIDS ', ' bud ', ' high ', ' stoned ', ' dabs ', ' legalize ', ' Spanx ', ' dehydroepiandrosterone (DHEA)', 'ibuprofen ', ' shapers ', ' pepper spray ', ' shapewear ', ' anabolic '];
	var commerce_gun_brands = [' Remington 28" versamax ', ' 22 Long Rifle Copper ', ' Bone Collector Hunter .22 ', ' Magpul Moe Ak Handguard Ak47-74 Fde ', ' P-Series Sig pistols ', ' Aac Piston Ti-rant 45 M13.5x1lh 9mm ', ' Zev Flcrm Ult 40sw For Gen4 Black-red ', ' 10734 PakLite Field Master Kit, RT Sheath ', ' AK47 ', 'Beeman air gun ', ' Gurkha Kukri Machete -37-913 ', ' Backwoods Choppers Machete -37-87 ', ' Enfield #4 Spike Bayonet with Metal Scabbard -15-22 ', ' Sabre 800,000 Volt Stun Gun -12-212 ', ' Axe & Hunting Knife Survival Combo -37-140 ', ' FX-3 6x42mm Matte Wide Duplex ', ' Benjamin Sheridan Titan NP Synthetic Hunting Rifle 4x32 Scope .22 ', ' Benjamin Sheridan Bulldog,.357 Caliber,Rifled/Shrouded Barrel,Realtree Xtra ', ' Barska Optics Red Dot ', ' Humvee Tactical Recon Folder #8 -15-018 ', ' Long M-1 Bayonet With Scabbard -15-297 ', ' Bg Choke Tube T-wrench 20ga.', 'Para Ordnance P14 Rub Grips w/FG Blk ', ' STRIKE INDUSTRIES AR ENHANCED ULTIMATE DUST COVER 223 CAPSULE - FDE ', ' Benjamin Sheridan Steel Eagle NP2 Synthetic Hunting Rifle w/3-9x32 Scope .22 ', ' AK IF Handguard, Quad Rail, DE ', ' Tanto Bayonet With Drop Leg Sheath -15-212 ', ' Stun Gun Pen -12-24 ', ' Benjamin Sheridan Trail NP Pistol ', ' Benjamin Sheridan Discovery Dual Fuel Bolt Action Rifle ', ' SPRINGFIELD 9MM RANGE OFC 5″ 9RD PKRZD ', ' Ruger 77 MKII SA Hvy Brl BB Stk ', ' 7.2" TRX 308 Extreme ARMALITE BLK ', ' Barnett Cross Scope w/Rings 4X32mm Multi-Ret 17060 ', ' Sig P220/p226 ', 'WW2 German Kar98K Bayonet S84/98 ', ' Lg-406 Laserguard For Smith & Wesson Sigma Full-size ', ' Glock 27 40 S&w ', 'Kaspa 4-16x44mm Ballistic-x ', ' Daisy 177 Cal Pellet Rifle 901 ', ' Valken CODE 68 Caliber '];

	words = words.concat(videos, liveVideos, pages, commerce, commerce_gun_brands);

	console.log('words'+'='+words.length, words);

	setTimeout(function(){
		console.log("Highlighting");
		wordsHighlight(words);
		notify();
	}, 20000);

	//Mutation Observer START
	var observer = new MutationObserver(function(mutations) {
		 console.log("Highlighting");
		 setTimeout(function(){
			wordsHighlight(words);
			notify();
		}, 500);	
	});
		  

	setTimeout(function(){
		console.log("Adding Mutation Observers>>>");
		observer.observe($('div._962 div:nth-child(3)')[0], { subtree: true, attributes: true, childList: true, characterData: true });
	}, 20000);
	//Mutation Observer END

	function wordsHighlight(words) {
		$.each(words, function(index, value){
			$('div#srt_renderer_wrapper div._5aj7 div._4bl9').highlight(value);
		});
	}

	function notify() {
		console.log("voilations", _.uniq(voilations));
		//Sending message to background to use in notifications.
		if(0 !== voilations.length) {
			//
			var items = [];

			  _.each(_.uniq(voilations), function(word){
			      var item = {};
			      item.title = '#';
			      item.message = word;
			      items.push(item);      
			  });
			  console.log(items);
			//
			chrome.runtime.sendMessage({greeting: "voilations", voilations: items}, function(response) {
			  console.log(response.farewell);
			});
		}
		//clearing voilations.
		voilations = [];
	}

}//window

/*	$('div#content').on('click', "button[class=\"_4jy0 _4jy4 _517h _51sy _42ft\"]", function(){
			setTimeout(function(){
				console.log("clicked Next");

				console.log("Highlighting");
				$('body').highlight('job');
				$('body').highlight('SRT');
				$('body').highlight('product');
				//$('body').highlight('out of');
				$('div#content').highlight('area');
		    }, 500);

		});*/

