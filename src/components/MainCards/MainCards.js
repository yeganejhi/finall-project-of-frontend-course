import './Main-Cards.css';
const MainCards = (props) => {
    return(
      <div className='maincard'>
            <div className="card mb-3 card-1">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/eng1.jpg'} className="img-fluid rounded-start db" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">این عنوان مطلب در اینجا قرار می گیرد </h5>
        <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
        <p className="card-text"><small className="text-muted"> <span className='smalldiv'>..</span> 25 خرداد 1398  </small><a href="#" className='more-link'> <span>| ادامه خبر ... </span></a></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 card-1">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={'assets/image/eng4.jpg'} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
        <p className="card-text"><small className="text-muted"> <span className='smalldiv'>..</span> 25 خرداد 1398  </small><a href="#" className='more-link'> <span>| ادامه خبر ... </span></a></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default MainCards