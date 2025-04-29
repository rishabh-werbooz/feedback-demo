export const addMDXStyles = () => {
  return `
    #prodio-announcement-description h1 {
      font-size: 18px;
      font-weight: bold;
    }

    #prodio-announcement-description h2 {
      font-size: 17px;
      font-weight: 600;
    }

    #prodio-announcement-description h3 {
      font-size: 14px;
      font-weight: 600;
    }

    #prodio-announcement-description p {
      font-size: 14px;
      line-height: 1.5;
    }

    #prodio-announcement-description a {
      font-size: 14px;
      text-decoration: underline;
    }

    #prodio-announcement-description ul {
      font-size: 14px;
      padding-left: 20px;
      list-style-type: disc;
    }

    #prodio-announcement-description ol {
      font-size: 14px;
      padding-left: 20px;
      list-style-type: decimal;
    }

    #prodio-announcement-description li {
      font-size: 14px;
      margin-bottom: 5px;
      display: list-item;
    }

    #prodio-announcement-description h1,
    #prodio-announcement-description h2,
    #prodio-announcement-description h3,
    #prodio-announcement-description p,
    #prodio-announcement-description ul{
      margin-bottom: 10px;
    }
  `;
};
