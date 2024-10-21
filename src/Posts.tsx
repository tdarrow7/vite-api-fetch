export interface PostModel {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const Post = (props: PostModel) => {
  const { id, body, title, userId } = props;
  return (
    <>
      <div>
        <p>
          <strong>id</strong>: {id}
        </p>
        <p>
          <strong>body</strong>: {body}
        </p>
        <p>
          <strong>title</strong>: {title}
        </p>
        <p>
          <strong>userId</strong>: {userId}
        </p>
      </div>
    </>
  );
};
