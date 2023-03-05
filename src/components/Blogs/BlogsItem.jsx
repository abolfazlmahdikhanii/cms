import React from "react";
import "./BlogsItem.css";

const BlogItem = () => {
  return (
    <section className="blog-content">
      {/* img */}
      <div className="blog-content--img">
        <img src="../../../src/assets/bg-slider.jpg" alt="" className="blog-content__img" />
      </div>
      {/* info */}
      <div className="blog-content--info">
        {/* title */}
        <h3>گارمین از اولین ساعت‌های هوشمند مجهز به نمایشگر AMOLED خود رونمایی کرد</h3>
        {/* dis */}
        <div className="blog-content--dis">
          <p className="blog-content__dis-txt">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
          <div className="blog-content--detail">
            {/* author */}
            <div className="blog-content--detail-author">
              <div className="detail-author--profile">
                <img src="../../../src/assets/profile.svg" alt="profile-icon" className="detail-author--profile__img" />
                <p className="detail-author--profile__txt"> احمد فرهمند</p>
              </div>
              <div className="detail-author--fav">
                <button className="blog-content__btn blog-comment__btn">
                  <p className="blog-content__btn-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99646 0.827528C7.17456 0.827528 8.09169 0.881027 8.80899 1.01903C9.52386 1.15656 10.0045 1.37154 10.3411 1.66825C11.0098 2.25772 11.2804 3.32306 11.2804 5.47101C11.2804 6.85518 11.1561 7.87367 10.8215 8.53718C10.661 8.85564 10.4576 9.07995 10.2017 9.22916C9.94304 9.37996 9.59628 9.474 9.11892 9.474C8.5035 9.474 8.0416 9.61219 7.68041 9.85692C7.32786 10.0958 7.11521 10.4085 6.95703 10.6574C6.9331 10.6951 6.91069 10.7307 6.88949 10.7643C6.75685 10.9749 6.67103 11.1111 6.55187 11.2181C6.44568 11.3134 6.29728 11.3954 5.99659 11.3954C5.69593 11.3954 5.54754 11.3133 5.44133 11.218C5.32218 11.1111 5.23635 10.9749 5.10373 10.7643C5.08251 10.7307 5.0601 10.6951 5.03616 10.6574C4.87797 10.4085 4.66531 10.0958 4.31276 9.8569C3.95156 9.61218 3.48966 9.474 2.87424 9.474C2.39941 9.474 2.05376 9.37759 1.79518 9.22368C1.53855 9.07092 1.33387 8.84146 1.17225 8.51818C0.836472 7.84655 0.712507 6.82628 0.712507 5.47101C0.712507 3.35035 0.982347 2.28225 1.65335 1.68581C1.99094 1.38572 2.47232 1.1667 3.18628 1.02566C3.90284 0.884101 4.81936 0.827528 5.99646 0.827528Z" stroke="#607496" strokeWidth="0.960719" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M6.47668 4.67017H8.39812" stroke="#607496" strokeWidth="0.960719" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M3.59465 6.5918H8.39825" stroke="#607496" strokeWidth="0.960719" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </p>
                  <p className="blog-content__btn-txt">4</p>
                </button>
                <button className="blog-content__btn blog-like__btn">
                  <p className="blog-content__btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
                      <g id="vuesax_outline_heart" data-name="vuesax/outline/heart" transform="translate(-236 -188)">
                        <g id="heart">
                          <path id="Vector" d="M10.75,19.3a2.589,2.589,0,0,1-.86-.13C6.07,17.86,0,13.21,0,6.34A6.329,6.329,0,0,1,6.31,0a6.214,6.214,0,0,1,4.44,1.84A6.214,6.214,0,0,1,15.19,0,6.336,6.336,0,0,1,21.5,6.34c0,6.88-6.07,11.52-9.89,12.83A2.589,2.589,0,0,1,10.75,19.3ZM6.31,1.5A4.831,4.831,0,0,0,1.5,6.34c0,6.83,6.57,10.63,8.88,11.42a1.585,1.585,0,0,0,.75,0c2.3-.79,8.88-4.58,8.88-11.42A4.831,4.831,0,0,0,15.2,1.5a4.751,4.751,0,0,0-3.84,1.94.774.774,0,0,1-1.2,0A4.77,4.77,0,0,0,6.31,1.5Z" transform="translate(237.25 190.35)" fill="currentColor" strokeWidth="0.960719" />
                          <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 188)" fill="currentColor" opacity="0" strokeWidth="0.960719" />
                        </g>
                      </g>
                    </svg>

                  </p>
                  <p className="blog-content__btn-txt">4</p>
                </button>
                <button className="blog-content__btn blog-save__btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 24 24">
                    <g id="archive" transform="translate(-172 -190)">
                      <path id="Vector" d="M3.5,1.985a8.878,8.878,0,0,1-3.01-.53.749.749,0,0,1-.45-.96.764.764,0,0,1,.97-.45A7.373,7.373,0,0,0,6,.045a.75.75,0,1,1,.51,1.41A8.878,8.878,0,0,1,3.5,1.985Z" transform="translate(180.495 198.295)" fill="currentColor" />
                      <path id="Vector-2" data-name="Vector" d="M16.5,21.5a3.271,3.271,0,0,1-1.61-.46l-4.88-2.71a1.438,1.438,0,0,0-1.15,0L3.98,21.04a2.748,2.748,0,0,1-2.77.15A2.754,2.754,0,0,1,0,18.7V4.61A4.618,4.618,0,0,1,4.61,0h9.65a4.618,4.618,0,0,1,4.61,4.61V18.7a2.754,2.754,0,0,1-1.21,2.49A2.242,2.242,0,0,1,16.5,21.5ZM9.43,16.71a2.658,2.658,0,0,1,1.3.31l4.88,2.71a1.323,1.323,0,0,0,1.28.17,1.343,1.343,0,0,0,.47-1.2V4.61A3.12,3.12,0,0,0,14.25,1.5H4.61A3.12,3.12,0,0,0,1.5,4.61V18.7a1.331,1.331,0,0,0,.47,1.2,1.351,1.351,0,0,0,1.28-.17l4.88-2.71A2.658,2.658,0,0,1,9.43,16.71Z" transform="translate(174.57 191.25)" fill="currentColor" />
                      <path id="Vector-3" data-name="Vector" d="M16.5,21.5a3.271,3.271,0,0,1-1.61-.46l-4.88-2.71a1.438,1.438,0,0,0-1.15,0L3.98,21.04a2.748,2.748,0,0,1-2.77.15A2.754,2.754,0,0,1,0,18.7V4.61A4.618,4.618,0,0,1,4.61,0h9.65a4.618,4.618,0,0,1,4.61,4.61V18.7a2.754,2.754,0,0,1-1.21,2.49A2.242,2.242,0,0,1,16.5,21.5ZM9.43,16.71a2.658,2.658,0,0,1,1.3.31l4.88,2.71a1.323,1.323,0,0,0,1.28.17,1.343,1.343,0,0,0,.47-1.2V4.61A3.12,3.12,0,0,0,14.25,1.5H4.61A3.12,3.12,0,0,0,1.5,4.61V18.7a1.331,1.331,0,0,0,.47,1.2,1.351,1.351,0,0,0,1.28-.17l4.88-2.71A2.658,2.658,0,0,1,9.43,16.71Z" transform="translate(174.57 191.25)" fill="currentColor" />
                      <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 190)" fill="none" opacity="0" />
                    </g>
                  </svg>

                </button>
              </div>
            </div>
            {/* category */}
            <div className="blog-content--category">
              <div className="blog-content--category__category">
                <p className="blog-content--category__category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <g id="vuesax_outline_folder-open" data-name="vuesax/outline/folder-open" transform="translate(-492 -188)">
                      <g id="folder-open">
                        <path id="Vector" d="M16.726,12.5H4.146c-3.4,0-3.58-1.87-3.73-3.38l-.4-5.01a3.792,3.792,0,0,1,.81-2.72A3.74,3.74,0,0,1,3.746,0h13.38A3.736,3.736,0,0,1,20,1.34l.17.23a3.687,3.687,0,0,1,.69,2.55l-.4,4.99C20.306,10.63,20.126,12.5,16.726,12.5ZM3.746,1.5a2.226,2.226,0,0,0-1.73.82l-.07.07a2.247,2.247,0,0,0-.43,1.59l.4,5.01c.14,1.46.2,2.01,2.23,2.01h12.58c2.04,0,2.09-.55,2.23-2.02l.4-5.01a2.18,2.18,0,0,0-.5-1.64l-.1-.12a2.227,2.227,0,0,0-1.64-.71Z" transform="translate(493.564 198.25)" fill="currentColor" />
                        <path id="Vector-2" data-name="Vector" d="M17.75,10.94a.755.755,0,0,1-.75-.75V8.4c0-2.98-.52-3.5-3.5-3.5H10.95A2.05,2.05,0,0,1,9,3.93L7.71,2.22A1.324,1.324,0,0,0,6.27,1.5H5c-2.98,0-3.5.52-3.5,3.5v5.15a.755.755,0,0,1-.75.75A.755.755,0,0,1,0,10.15V5C0,1.17,1.17,0,5,0H6.28A2.723,2.723,0,0,1,8.92,1.32l1.28,1.7c.27.36.29.38.76.38h2.55c3.83,0,5,1.17,5,5v1.79A.771.771,0,0,1,17.75,10.94Z" transform="translate(494.75 189.28)" fill="currentColor" />
                        <path id="Vector-3" data-name="Vector" d="M5.89,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.89a.75.75,0,0,1,0,1.5Z" transform="translate(500.68 204.25)" fill="currentColor" />
                        <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 188)" fill="none" opacity="0" />
                      </g>
                    </g>
                  </svg>

                </p>
                <p>فناوری</p>
              </div>
              <div className="blog-content--date">
                <p className="blog-content--category__category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <g id="vuesax_outline_clock" data-name="vuesax/outline/clock" transform="translate(-172 -188)">
                      <g id="clock">
                        <path id="Vector" d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z" transform="translate(173.25 189.25)" fill="currentColor" />
                        <path id="Vector-2" data-name="Vector" d="M4.82,9.17a.67.67,0,0,1-.38-.11L1.34,7.21A2.949,2.949,0,0,1,0,4.85V.75A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v4.1a1.478,1.478,0,0,0,.61,1.07l3.1,1.85A.749.749,0,0,1,5.47,8.8.77.77,0,0,1,4.82,9.17Z" transform="translate(182.89 194.76)" fill="currentColor" />
                        <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0" />
                      </g>
                    </g>
                  </svg>

                </p>
                <p>1 روز قبل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BlogItem;