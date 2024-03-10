
<style>
#responsibility-area .section-title h1{
	 font-size:4rem!important; 
}
    .service {margin: 30px 0px; overflow:hidden;}
.service h2{font-style:normal; font-family: 'Open Sans', sans-serif; font-size:30px; line-height:50px; color:#FFF; padding:0 10px;}
.service p{font-style:normal; font-family: 'Open Sans', sans-serif; font-size:14px; line-height:20px; color:#FFF; text-align:center;}
.service p a{color:#FFF;}
.service p a:hover{text-decoration:underline;}
.governmentBodyHeading{ background:#6dab04; }
.governmentBodyHeading h2{ font-size:24px; line-height:50px; }

.service-heading {padding: 0px 0px; color: #fff; font-family: 'Open Sans', sans-serif; font-size:24px; line-height:50px; 
/*border-bottom:1px solid #b3e5fe;*/ text-align:center; background:#1687bf; margin-top:20px;}

.green{background:#94c73e;}
.yellow{background:#f2b50f;}
.blue{background:#3cace4;}

.governmentBody{ margin:20px auto; overflow:hidden;    display: inline-flex;
    flex-wrap: wrap;
}
ul.listTwo li {background:url(assets2/images/arrow_button.png) no-repeat left 5px; padding: 0 0 0 30px; list-style:none;}
.governmentBody p { line-height:16px;}
.governmentBody p strong{ color:#eaf7d5;}
.governmentBody p span{ font-size:12px; color:#eaf7d5;}
.governmentBody .col-sm-3{ border-right:1px  dotted #dcebc3; border-bottom:1px dotted #dcebc3;}
.news p{ padding:15px; border-bottom:1px dotted #86cff4;}

/*----------end of governingBody and upcoming events---------*/
/*----------certifictae---------*/
.certificate{margin:25px 0;}
.certificate img{margin:15px auto; display:block; border:solid 1px #333;  }
.certificate img:hover {  -webkit-filter: grayscale(1); filter: grayscale(1);}
.btnPanel{ 
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.btnPanel a{border:solid 1px #CCC; display:block; margin:5px 0; -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px; }
.btnPanel img{ margin:5px auto; display:block; }
.btnPanel img:hover {  -webkit-filter: grayscale(1); filter: grayscale(1);}
/*----------end of certifictae---------*/

</style>
<section id="slider-area" style="cursor: pointer;">
            <div class="slider-active-wrap owl-carousel text-center text-md-start">

                <div class="single-slide-wrap slide-bg-1" style="background-image:url(<?php echo base_url() . IMAGE_URL ; ?>slider/slider1.jpg) !important;">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="slider-content">
                                    <h3><span>THE JALPAIGURI GOVERNMENT ENGINEERING COLLEGE
ALUMNI ASSOCIATION,
JALPAIGURI</span></h3>
                                    <!-- <h3>Students of <span>Oxfornt University</span></h3>
                                    <p>Alumni Needs enables you to harness the power of your alumni network. Whatever may be the
                                        need (academic, relocation, career, projects, mentorship, etc. you can ask the community
                                        and get responses in three.</p> -->
                                    <div class="slider-btn">
                                    <a href="<?php echo base_url('mission-vission') ?>" class="btn btn-brand">our mission</a>
                                        <a href="<?php echo base_url('upcoming-events') ?>" class="btn btn-brand-rev">Upcoming Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-slide-wrap slide-bg-2" style="background-image:url(<?php echo base_url() . IMAGE_URL ; ?>slider/slider2.jpg) !important;">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="slider-content">
                                    <<h3><span>THE JALPAIGURI GOVERNMENT ENGINEERING COLLEGE
ALUMNI ASSOCIATION,
JALPAIGURI</span></h3>
                                    <!-- <h3>Students of <span>Oxfornt University</span></h3>
                                    <p>Alumni Needs enables you to harness the power of your alumni network. Whatever may be the
                                        need (academic, relocation, career, projects, mentorship, etc. you can ask the community
                                        and get responses in three.</p> -->
                                    <div class="slider-btn">
                                    <a href="<?php echo base_url('mission-vission') ?>" class="btn btn-brand">our mission</a>
                                        <a href="<?php echo base_url('upcoming-events') ?>" class="btn btn-brand-rev">Upcoming Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-slide-wrap slide-bg-3" style="background-image:url(<?php echo base_url() . IMAGE_URL ; ?>slider/slider3.jpg) !important;">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="slider-content">
                                <h3><span>THE JALPAIGURI GOVERNMENT ENGINEERING COLLEGE
ALUMNI ASSOCIATION,
JALPAIGURI</span></h3>
                                    <!-- <h3>Students of <span>Oxfornt University</span></h3>
                                    <p>Alumni Needs enables you to harness the power of your alumni network. Whatever may be the
                                        need (academic, relocation, career, projects, mentorship, etc. you can ask the community
                                        and get responses in three.</p> -->
                                    <div class="slider-btn">
                                        <a href="<?php echo base_url('mission-vission') ?>" class="btn btn-brand">our mission</a>
                                        <a href="<?php echo base_url('upcoming-events') ?>" class="btn btn-brand-rev">Upcoming Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="social-networks-icon">
                <ul>
				<?php
$query = $this->db->get('social_links');
$result = $query->result(); // Retrieves an array of result rows
 ?>
 <?php foreach($result as $results){  ?>
		<?php if($results->name =='facebook' && $results->links !=''){ ?>
			  <li>  <a href="<?php echo $results->links ?>" target="_blank" class="facebook"> <i class="fab fa-facebook-f"></i> </a></li>
				<?php }
		else if($results->name =='Whatsapp'){ ?>
		<a href="http://web.whatsapp.com/send?phone=+91<?php echo $results->links; ?>%20%20%20%20&amp;text=Hi,%20I%20want%20to%20discuss%20a%20project%20with%20you.%20Are%20you%20available?" target="_blank" class="facebook">
		<i class="fab fa-whatsapp"></i>
		</a></li>
	
			 <?php
		}
		else if($results->name =='Google-plus' && $results->links !=''){
			 ?>
			     <li> <a href="<?php echo $results->links;?>" target="_blank" class="google-plus"><i class="fab fa-google-plus"></i></a></li>
			 <?php
		}
		else if($results->name =='Twitter' && $results->links !=''){
			 ?>
			 <li>  <a href="<?php echo $results->links ?>" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a></li>
			 <?php
		}else if($results->name =='LinkedIn' && $results->links !=''){
			 ?>
			  <a href="<?php echo $results->links ?>" target="_blank"><i class="fab fa-linkedin-in"></i></a>
			 <?php
		}
		else if($results->name =='Instagram' && $results->links !=''){
			 ?>
			  <a href="<?php echo $results->links ?>" target="_blank"><i class="fab fa-instagram"></i></a>
			 <?php
		}
		?>
	  <?php 
 } 
 
 /*
    <li><a href="#" target="_blank" class="facebook"><i class="fab fa-facebook"></i></a></li>
                    <li><a  href="tel:7439428480" target="_blank" class="facebook"><i class="fab fa-whatsapp"></i></a></li>
                    <li><a href="#" target="_blank" class="google-plus"><i class="fab fa-google-plus"></i></a></li>
                    <li><a href="#" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a></li>
 */
 
 
 ?>
                 
                </ul>
            </div>

        </section>
         <!--=================================-->
        <!--=         Upcoming Event        =-->
        <!--=================================-->
        <section id="upcoming-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="upcoming-event-wrap">
                            <div class="up-event-titile">
                                <h3>Scholarship</h3>
                            </div>
                            <div class="upcoming-event-content owl-carousel">
                                <!-- No 1 Event -->
                                <?php
						if(count($scholarshipRows)>0){
							$counter=0;
							foreach($scholarshipRows as $scholarshipRow){
								$counter++;
						?>
                                <div class="single-upcoming-event">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div class="up-event-thumb">
                                                <div class="text-center">
                                                <img src="<?php echo base_url() . IMAGE_URL ; ?>scholarship/<?php echo $scholarshipRow->photo ?>" style="max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  margin: auto;" class="img-fluid" alt="Upcoming Event">
                                                </div>
                                                
                                                <!-- <h4 class="up-event-date"><?php echo stripslashes($scholarshipRow->scholarship_name) ?></h4> -->
                                            </div>
                                        </div>

                                        <div class="col-lg-7">
                                            <div class="display-table">
                                                <div class="display-table-cell">
                                                    <div class="up-event-text">
                                                    
                                                    <div class="text-center">
                                                    <h3 class="up-event-date"><?php echo stripslashes($scholarshipRow->scholarship_name) ?></h3>
                                                        <p>For <?php echo stripslashes($scholarshipRow->scholarship_for) ?><br>
                                            Sponsored By <?php echo stripslashes($scholarshipRow->sponsored_by) ?><br>
                                            (Initiated from <?php echo $scholarshipRow->initiated_from ?>)
                                                        </p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                                <?php
							}
						}
						?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="responsibility-area" class="section-padding">
            <div class="container">
                <!--== Section Title Start ==-->
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="section-title">
                            <h1>Welcome To The</h1>
                            <h2>JALPAIGURI GOVERNMENT ENGINEERING COLLEGE ALUMNI ASSOCIATION
</h2>
                        </div>
                    </div>
                </div>
                <!--== Section Title End ==-->

                <!--== Responsibility Content Wrapper ==-->
                <div class="row text-center text-sm-left">
                   
                    <div class="col-lg-12 col-sm-12">
                        <div class="single-responsibility">
                            <img src="<?php echo base_url() . IMAGE_URL ; ?>welcome.png" alt="Responsibility">
                            <!-- <h4>Build Our Community</h4> -->
                            <p>It was a vision to establish a centre of professional learning where pursuit of knowledge and excellence was not to be barred by nationality, language, cultural plurality and religion that drove the founders of Jalpaiguri Government Engineering College (JGEC) to establish a world class centre of technical excellence. Established in 1961, JGEC is the second oldest of all technical institutions in the state of West Bengal, India. From the time of its inception, JGEC has gone from strength to strength providing essential manpower to harness the flood of opportunities in the fields of engineering and technology in the country and beyond. </p>
        <p>The Alumni Association works closely with the institution to involve ex-students and present students through various activities.</p>
		<p>JGEC has a number of alumni chapters around the globe.</p>
        
        
        
        <p><strong>The JGEC Alumni Association provides opportunities to:</strong></p>
        <p><strong><i class="fa fa-check" aria-hidden="true"></i> Promote JGEC pride and tradition at campus and across the globe</strong></p>
        <p><strong> <i class="fa fa-check" aria-hidden="true"></i> Promote relationships between alumni, students and administration</strong></p>
        <p><strong><i class="fa fa-check" aria-hidden="true"></i> Enhance the college experience through fun, memorable events and value addition</strong></p>
        
        
                        </div>
                    </div>
                    
                </div>
                <!--== Responsibility Content Wrapper ==-->
            </div>
        </section>
        <section id="responsibility-area" class="section-padding">
            <div class="container">
                <!--== Section Title Start ==-->
                <div class="row">

                <div class="col-sm-8">
    
    <div class="service green">
        <div class="governmentBodyHeading">
        <h2>Governing Body</h2>
        </div>
        
        <?php
        if(count($gvBodyRows)>0)
        {	
        ?>
        <div class="governmentBody">
        
            <table>
                
            <?php
            foreach($gvBodyRows as $gvBodyRow)
            {
            ?>
            
            <div class="col-sm-3" style="height: 250px;">
                <p><strong><?php echo $gvBodyRow['title']; ?></strong></p>	
                <p><?php echo $gvBodyRow['description']; ?></p>
            </div>
            <?php 
            }
            ?>
            
            </table>
            
        </div><!--end of governmentBody-->
        <?php
        }
        ?>
        
       
        
        
  </div><!--end of service-->
    
</div><!--end of col-sm-8-->

<div class="col-sm-4">

    <div class="service blue" style="padding-bottom:20px;">
        <div class="service-heading">Upcoming Events</div><!--end of ervice-heading-->
        
        <br>
        <div class="news">
        <marquee style="height: 350px;" direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();" style="text-align:center;  color:#FFF;" >
           <?php
            if(count($upComEvntRows)>0){	
              foreach($upComEvntRows as $upComEvntRow){
                  echo "<strong>$upComEvntRow[title]</strong>";
                  echo "$upComEvntRow[description]";
              }
            }
            ?>
            
        </marquee>
        </div>
        
    </div><!--end of service-->
    
    <ul class="listTwo">
    <!--<li><a href="#url">Find Your Pal (Search Friend)</a></li>
    <li><a href="#url">Alumni Membership info</a></li>-->
    <li><a href="#url">Gallery</a></li>
    <!--li><a href="alumni-fun-club">Alumni Fun Club</a></li-->  
    <li><a href="<?php echo base_url() ; ?>home/alumni_fun_club"><strong >Alumni Fun Club</strong></a></li>
    <!--<li><a href="#url">Apple</a></li>-->
    <li><a href="<?php echo base_url() ; ?>public/site/download/constitution.pdf" target="_blank">Constitution</a></li>
    
    <!--li><a href="<?php echo base_url() ; ?>public/site/download/alumni_activities.pdf" target="_blank"><strong class="label label-info">"Alumni activities till 31st March 2019"</strong></a></li-->
    <li><a href="<?php echo base_url() ; ?>home/alumni_activities"><strong class="label label-info">Alumni activities</strong></a></li>
    </ul>
    
</div>
                </div>
            </div>
        </section>

       
                <div class="container">
	<div class="btnPanel">
        <div class="col-sm-6" style="padding: 5px;"><a href="<?php echo base_url() ; ?>home/online_money_receipt"><img src="<?php echo base_url() . IMAGE_URL ; ?>money_transfer_btn.png" class="img-responsive" alt=""></a></div>
        <!--div class="col-sm-4">
		<a href="<?php echo base_url() ; ?>public/site/download/official_documents.pdf" target="_blank"><img src="<?php echo base_url() . IMAGE_URL ; ?>offical_btn.png" class="img-responsive" alt=""></a>
		</div-->
		<div class="col-sm-6"style="padding: 5px;">
		<a href="<?php echo base_url() ; ?>home/offical_document"><img src="<?php echo base_url() . IMAGE_URL ; ?>offical_btn.png" class="img-responsive" alt=""></a>
		</div>
        <!--<div class="col-sm-4"><a href="official-desk" style="border:none;"><img src="<?php echo base_url() . IMAGE_URL ; ?>donate.jpg" class="img-responsive" alt=""></a></div>-->
    </div><!--end of certificate-->
</div><!--end of container-->


               

