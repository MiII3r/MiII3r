const baseUrl = {
    twitter: 'https://twitter.com/intent/tweet',
    facebook: 'https://www.facebook.com/sharer/sharer.php',
    kakaostory: 'https://story.kakao.com/share',
};

function shareTwitter (e) {
    window.open(baseUrl.twitter
        + `/via=${%encodeURIComponent('MiII3r')}`
        + `&text=${encodeURIComponent('MiII3r's Homepage')}`
        + `&url=${encodeURIComponent='window.location.href'}`
        `_blank`
        );

function shareFacebook(e) {
  window.open(baseUrl.facebook
    + `?u=${encodeURIComponent(window.location.href)}`,
    '_blank'
  );
};

function shareKakaoStory(e) {
  window.open(baseUrl.kakaostory
    + `?url=${encodeURIComponent(window.location.href)}`,
    '_blank'
  );
}

function rotateCard(e) {
  const card = document.getElementById('MiII3r');

  if (card.style.transform === 'rotateY(180deg)') {
    card.style.transform = 'rotateY(0deg)';
  } else {
    card.style.transform = 'rotateY(180deg)';
  }
};