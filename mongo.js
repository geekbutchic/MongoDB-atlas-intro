//STEP 1A. INSERTS A NEW BLOG POSTS

const sampleBlog = {
  createdAt: "2022-03-22T15:16:56.285Z",
  title: "ducimus",
  text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
  author: "Luke Rogahn PhD",
  id: "2",
};

db.posts.insertOne(sampleBlog);

//STEP 1B. READS THE NEW BLOG POSTS

db.posts
  .find({
    //YOU CAN ENTER WHATEVER NUMBER 100 IS THE DEFAULT
  })
  .limit(100);

//STEP 1C. UPDATE THE NEW BLOW WITH A NEW TITLE

db.posts.updateOne(
  { title: "ducimus" },
  {
    $set: { title: "Andiamo" },
  }
);

//STEP 1D. DELETE THE NEW BLOG POST

db.posts.deleteOne({
  author: "Luke Rogahn PhD",
});

