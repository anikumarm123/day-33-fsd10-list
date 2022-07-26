var fabevy =[
    {   photos:'muthu.jpeg',
        name: 'Muthu kumar M',
        fresher:'Fresher from Muppuliyoor',
        location:'Tenkasi.',
        git:'https://github.com/anikumarm123',
        resume:'//C:/Users/Muthukumar/Downloads/Muthukumar-resume%20(1).pdf',
        PrimarySkills:'Html, Css, JavaScript.',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BE',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'
    },
    {   photos:'rahul.jpeg',
        name: 'Rahul N',
        fresher:'Fresher from Pullukattu Valasai',
        location:'Tekasi.',
        git:'https://github.com/rahulmahi',
        resume:'//C:/Users/Muthukumar/Downloads/rahul-resume.pdf',
        PrimarySkills:'Html, Css, JavaScript.',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BE',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'  
    },
    {   photos:'chithiral.jpeg',
        name: 'Chithirai Vel',
        fresher:'Fresher from Thoothukudi',
        location:'Thoothukudi.',
        git:'https://github.com/chithiraivel',
        resume:'https://talenz.in/resume/manikandon.pdf',
        PrimarySkills:'Html, Css, JavaScript',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BE',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'
    },
    {   photos:'leao.jpeg',
        name: 'Leo Wilson',
        fresher:'Fresher from Surandai',
        location:'Surandai.',
        git:'https://github.com/Leowilson17',
        resume:'https://talenz.in/resume/manikandon.pdf',
        PrimarySkills:'Html, Css, JavaScript',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BCA',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'
    },
    {   photos:'mariselvam.jpeg',
        name: 'Mariselvam',
        fresher:'Fresher from Alangulam',
        location:'Alangulam.',
        git:'https://github.com/MARISELVAM12347',
        resume:'https://talenz.in/resume/manikandon.pdf',
        PrimarySkills:'Html, Css, JavaScript',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BE',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'
    },
    {   photos:'alphonse.jpeg',
        name: 'Alphonse',
        fresher:'Fresher from Alangulam',
        location:'Alangulam.',
        git:'https://github.com/selva06092020',
        resume:'https://talenz.in/resume/manikandon.pdf',
        PrimarySkills:'Html, Css, JavaScript',
        SecondarySkills:'Visual Studio Code, Git',
        ExpectedSalary:'2.5L',
        Education:{
            collage:'BE',
            hsl:'HSC - State Board - 2016 - 70%.',
            sslc:'SSLC - State Board - 2014 - 85%.'
        },
        Availabilitytojoin:'Immediate'
    },
]

var main_div;

var bdy_div = document.createElement('div');
bdy_div.className = 'bdy-div';

document.body.append(bdy_div);


fabevy.forEach(fun);

function fun(student){
 var top_part = document.createElement('div');
 top_part.className ='top-flx';

 var top_flx_1 = document.createElement('div');
 top_flx_1.className = 'top-flx1'
 var photo = document.createElement('img');
 photo.className = "image";
 photo.src = student.photos;
 top_flx_1.append(photo);

 var top_flx_2 = document.createElement('div');
 top_flx_2.className = 'top-flx2'

 var name = document.createElement('h2');
 name.textContent=student.name;

 var fresher  = document.createElement('p');
 fresher.textContent = student.fresher;

 var location = document.createElement('h5');
location.textContent = student.location;
 top_flx_2.append(name,fresher,location);

 var top_flx_3 = document.createElement('div');
 top_flx_3.className = 'top-flx3';

 var icon_git = document.createElement('i');
 icon_git.setAttribute("class","fa fa-github");

 var icon_resume = document.createElement('i');
 icon_resume.setAttribute("class","fa fa-file-text");

 var a_tag1 = document.createElement('a');
 a_tag1.setAttribute('href',student.git);
 a_tag1.target ='_blank'

 var a_tag2 =document.createElement('a');
 a_tag2.setAttribute('hfer',student.resume);
 a_tag2.target = '_blank'

 a_tag1.append(icon_git);
 a_tag2.append(icon_resume);
 top_flx_3.append(a_tag1,a_tag2);

 top_part.append(top_flx_1,top_flx_2,top_flx_3);
 
 

var bottum_flx =document.createElement('div');
bottum_flx.className = 'bottum-flx';

var bottum_flx1 =document.createElement('div');
 bottum_flx1.className = "bottum-flx1"

var primarry_skill = document.createElement('h3');
 primarry_skill.textContent = "Primary Skills";

var primary_phara =document.createElement('p');
primary_phara.textContent = student.PrimarySkills;

var Secondary_skill = document.createElement('h3');
Secondary_skill.textContent = "Seconday Skills";

var seconday_phara = document.createElement('p');
seconday_phara.textContent = student.SecondarySkills;

var salary =document.createElement('h3');
salary.textContent = "Expected Salary";

var salary_phara = document.createElement('p');
salary_phara.textContent = student.ExpectedSalary;
 
bottum_flx1.append(primarry_skill,primary_phara,Secondary_skill,seconday_phara,salary,salary_phara);

var bottum_flx2 =document.createElement('div');
bottum_flx2.className = 'bottum-flx2'

var education =document.createElement('h3');
education.textContent = 'Education';

var education_phara1 = document.createElement('p');
education_phara1.textContent = student.Education.collage;

var education_phara2 = document.createElement('p');
education_phara2.textContent = student.Education.hsl;

var education_phara3 = document.createElement('p');
education_phara3.textContent = student.Education.sslc;

var availabl = document.createElement('h3');
availabl.textContent = 'Avalability to Join';

var available_phara = document.createElement('p');
available_phara.textContent = student.Availabilitytojoin;

 bottum_flx2.append(education,education_phara1,education_phara2,education_phara3,availabl,available_phara);

bottum_flx.append(bottum_flx1,bottum_flx2);

//document.body.append(top_part,bottum_flx);
 
main_div = document.createElement('div');
main_div.className = 'each-student'

main_div.append(top_part,bottum_flx);

bdy_div.append(main_div);

}

var select_Box = document.querySelector('.select');

var graduate = document.createElement('option');
graduate.textContent = '--Graduate--';

var option_Bca = document.createElement('option');
option_Bca.textContent ='BCA';
option_Bca.value = 'BCA';

var option_Be = document.createElement('option');
option_Be.textContent = 'BE';
option_Be.value = 'BE';

var option_me = document.createElement('option');
option_me.textContent = 'ME';
option_me.value = 'ME';

select_Box.append(graduate,option_Bca,option_Be,option_me);
//console.log(select_Box);

select_Box.addEventListener('change',select);
function select(){
    bdy_div.innerHTML ="";
   var select_val = this.value;
   function myfun(val){
    var get_val = val;

    if(select_val == get_val.Education.collage){ 
        fun(get_val);   
        console.log(get_val.Education.collage);
    }  
    
}
fabevy.forEach(myfun);
}
