import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-400 shadow-xl">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">Knowledge &nbsp;<span className="text-orange-950 font-bold">Cafe</span></a>
                </div>

                <div className="flex-none gap-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/301255839_3225578744362137_8432827628555415871_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGr5MmScPA8y8JviO5z8vaw3CFGBn7ZrdfcIUYGftmt18TdCH9vvyk9jXcWLBLr5fwtFhtGbsiBV5BBwMiUzbE2&_nc_ohc=lTsXMKv5SuMAX96uCkN&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBdYdkrIkoTZHRQY2NOJ2eTAHlOxlTkQj4rwHjl7ecIFA&oe=642A6BDA" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;