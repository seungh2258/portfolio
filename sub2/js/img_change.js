

$(document).ready(function(){


    var characters = [
        {
            name:'1960년대',
            information:'<span>대한민국에 처음으로 라면을 선보이다.</span><br><br>오랫동안 쌀과 잡곡만이 유일한 식생활 수단이었던 우리 국민들은 부족한 식량으로 늘 허덕여야만 했습니다.<br><br>쌀을 생산하는 농업국이면서도 고달픈 보릿고개에서 벗어나지 못하고 살아온 우리 국민들에게 그 배고픔을 잊게 해 준 제2의 쌀인 라면이<br>1963년도 9월 15일 국내 최초로 탄생하였습니다.<br><br>한 끼의 식사로서는 전혀 손색없는 값싸고 영양가 높은 주황색의 삼양라면이 세상에 첫 선을 보인 것은<br>역사적인 식품 문화의 혁명이었습니다.',
            imgsrc:'history_01.png'
        },
        {
            name:'1970년대',
            information:'<span>세계에 알려 국가 경쟁력에 보탬이 되자.</span><br><br>1970년대 초반, 우리나라가 주곡인 쌀의 자급을 이루어 처음으로 외미 도입을 중단한 시기이자, 식품 산업이 본격적으로 대두된 시기입니다.<br><br>삼양식품은 식품 연구소를 발족하여 원료 및 제품의 분석과 품질 관리를 하여 한국인의 식성에 맞는 제품 개발에 주력하였으며<br>해외 수출을 적극적으로 진행하였습니다.<br><br>또한 대관령에 대단위 목장을 건설함으로써 삼양식품의 주요 원료 공급원 역할을 하여 라면스프용 쇠고기등 육류를 자급하고 젖소를 사육하여 완전 식품인 우유와 유제품을 생산하는 원료의 원할한 공급을 할 수 있게 되었습니다.',
            imgsrc:'history_02.png'
        },
        {
            name:'1980년대',
            information:'<span>명실상부한 종합 식품기업으로 발돋움 하다.</span><br><br>1980년대에 들어서 업종 다각화를 골격으로 경영 다각화 체제를 구축하기에 이르렀습니다.<br><br>라면 이외에 스낵 부문, 우유, 아이스크림, 치즈 발효유 등의 유가공 부문과 간장, 된장, 고추장 등의 장유 부문, 축산사업, 유통업, 농수산물 가공 등 식품을 중심으로 한 관련 사업을 대폭 확장, 명실상부한 종합 식품기업으로서 발돋움을 하게 됩니다.<br><br>이 시기에는 수출 및 내수 증가에 힘입어 라면에 대한 일반 국민의 주식 대체적인 수요가 증가하였고, 일본, 미주지역에의 급격한 수출 중대를 보였습니다.',
            imgsrc:'history_03.jpg'
        },
        {
            name:'1990년대',
            information:'<span>기업을 지켜내기 위한 고전분투.</span><br><br>1989년 말 발생한 우지사건은 기업의 존폐 위기를 직면하게 한 최대의 사건이었습니다.<br>사건 직후, 공장의 기계는 멈추었고 1,000여명의 임직원이 회사를 떠났으며, 회사의 물질적, 정신적 피해는 막대했습니다.<br><br>그러나 8여년의 긴 법정 투쟁 끝에 마침내 1997년 8월, 대법원의 무죄판결을 받는데 성공했습니다.<br>또한 이 시기에는 기능성 식품, 장수식품 개발에 심혈을 기울여서 라면을 제조할 때, 안전하고 영양이 풍부한 식품 공급에 노력하였습니다.',
            imgsrc:'history_04.png'
        },
        {
            name:'2000년대',
            information:'<span>경영혁신에 전념을 다하다.</span><br><br>외환위기 직후인 1998년 삼양식품은 경영난을 겪으면서 화의를 신청했지만, 이후 판매 회복에 주력해 2005년 3월 화의에서 벗어나게 됩니다.<br>삼양식품은 경영 정상화 이후, 경영 혁신에 전념을 다하여 매년 2,500억원 내외의 매출과 연 150~200억의 영업이익 실적을 보였습니다.<br><br>이 시기에는 동양 최대 규모인 대관령 목장에 풍력단지를 조성하여 청정 에너지 공급원 뿐만 아니라 주변 풍광과도 잘 어울리는 산업단지로 개발하는 계획을 세우고 노력하였습니다.',
            imgsrc:'history_05.jpg'
        },
        {
            name:'2010년대',
            information:'<span>글로벌 식품기업으로 자리잡기까지의 노력.</span><br><br>2010년, 삼양식품은 대표 제품인 삼양라면의 광고모델을 소녀시대로 정하고,<br>친구라면 삼양라면 캠페인을 진행해 젊고 밝은 기업으로 도약하고자 노력하였습니다.<br><br>또한 국내 최초의 하얀 국물라면인 나가사끼짬뽕, 처음으로 매운맛 볶음면이라는<br>카테고리를 만든 불닭볶음면 등 국내 라면 시장에서 새로운 트렌드를 이끄는 제품을 개발하기 위해 노력해왔습니다.<br><br>2014년에는 라면 업계 최초로 KMF 할 인증을 획득했고,<br>이후 인도네시아 MUl, 아랍에미리트 ESMA 할랄 인증을 추가로 획득하며 빠르게 성장하는 할랄 푸드 시장에도 적극 진출했습니다.<br><br>2016년 말부터 시작된 전세계적인 불닭브랜드의 열풍으로 수출이 빠르게 증가했고, 2017년 수출 1억불 탑, 2018년 수출 2억불탑, 2019년 브랜드탑을 수상한 삼양식품은 전세계 80여 개국에 제품을 수출하며 KFood를 선도하는 글로벌 식품기업으로 자리매김했습니다.',
            imgsrc:'history_06.png'
        },
        {
            name:'2020년대',
            information:'<span>지속가능경영을 추구하다.</span><br><br>불닭브랜드의 전세계적인 인기로 폭발적인 성장을 한 삼양식품은 지속가능경영을 실천하기 위해 노력하고 있습니다.<br>이에 ESG위원회를 출범하고 경영 투명성 제고, 친환경 경영, 사회적 책임 등 ESG 경쟁력 강화에 집중하고 있습니다.<br><br>이사회의 기능을 강화해 투명한 경영을 실천할 수 있는 기반을 다졌으며, 이와 함께 녹색기술제품 인증을 받은 포장재를 도입하는 등 친환경 경영에도 속도를 내고 있습니다.<br><br>또한 환경경영 조직 강화와 함께 사전예방적 환경관리 활동을 위해 환경친화적 생산시스템을 구축했습니다.<br>사회공헌활동도 지속적으로 확대하고 있습니다. 본사 및 각 공장과 계열사가 위치한 지역사회를 중심으로 사회공헌활동을 이어오고 있으며, 삼양이건장학재단과 삼양원동문화재단을 통해 장학금 및 학술지원사업을 전개하고 있습니다.',
            imgsrc:'history_07.png'
        }
      ];
  
  
    $('.characters .charbox img').attr('src','./images/content3/'+characters[0].imgsrc);
    $('.gallery-thumbs .title').html(characters[0].name);
    $('.gallery-thumbs .main_t').html(characters[0].information);
    $('.characters .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');
    $('.characters .gallery-thumbs .more').attr('href', characters[0].link)
      
    $('.characters .gallery-thumbs ul a').click(function(e){
    e.preventDefault();
  
    var ind = $(this).index('.characters .gallery-thumbs ul a');

    $('.characters .charbox img').attr('src','./images/content3/'+characters[ind].imgsrc).hide().fadeIn('fast');
    $('.gallery-thumbs .title').html(characters[ind].name);
    $('.gallery-thumbs .main_t').html(characters[ind].information);
    $('.characters .gallery-thumbs .more').attr('href', characters[ind].link);

    // 기존 필터 초기화
    $('.characters .gallery-thumbs ul li a').css('filter','grayscale(100%)');
    $(this).css('filter','grayscale(0)');

    // current 클래스 처리
    $('.characters .gallery-thumbs ul li a').removeClass('active');
    $(this).addClass('current');

});
  });
  
  