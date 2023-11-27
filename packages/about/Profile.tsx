const Profile = (props) => {
  return (
    <div class="relative mx-auto w-full max-w-container px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20">
      <table>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
        <tr>
          <td class="pr-4">name</td>
          <td>Tetsuya Takasawa</td>
        </tr>
        <tr>
          <td class="pr-4">birth</td>
          <td>1985/11/26</td>
        </tr>
          
        </tbody>
      </table>
    </div>
  );
};

const Left = (props) => {
  return (
    <div class="mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none">
    </div>

  );
};


export { Profile }