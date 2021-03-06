/**
 * Created by korman on 22.01.18.
 */
import React from 'react';

export default class Overlay extends React.Component {
    render(){
        return (
            <div className="overlay" style="display: none" data-pages="search">
                {/*<!-- BEGIN Overlay Content !-->*/}
                <div className="overlay-content has-results m-t-20">
                    {/*<!-- BEGIN Overlay Header !-->*/}
                    <div className="container-fluid">
                        {/*<!-- BEGIN Overlay Logo !-->*/}
                        <img className="overlay-brand" src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
                            {/*<!-- END Overlay Logo !-->*/}
                            {/*<!-- BEGIN Overlay Close !-->*/}
                            <a href="#" className="close-icon-light overlay-close text-black fs-16">
                                <i className="pg-close"></i>
                            </a>
                        {/*<!-- END Overlay Close !-->*/}
                    </div>
                    {/*<!-- END Overlay Header !-->*/}
                    <div className="container-fluid">
                        {/*<!-- BEGIN Overlay Controls !-->*/}
                            <input id="overlay-search" className="no-border overlay-search bg-transparent" placeholder="Search..." autocomplete="off" spellcheck="false"/>
                                <br/>
                                <div className="inline-block">
                                    <div className="checkbox right">
                                        <input id="checkboxn" type="checkbox" value="1" checked="checked"/>
                                        <label for="checkboxn"><i className="fa fa-search"></i> Search within page</label>
                                    </div>
                                </div>
                                <div className="inline-block m-l-10">
                                    <p className="fs-13">Press enter to search</p>
                                </div>
                        {/*<!-- END Overlay Controls !-->*/}
                    </div>
                    {/*<!-- BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like !-->*/}
                    <div className="container-fluid">
                        <span>
                            <strong>suggestions :</strong>
                        </span>
                        <span id="overlay-suggestions"></span>
                        <br/>
                        <div className="search-results m-t-40">
                            <p className="bold">Pages Search Results</p>
                            <div className="row">
                                <div className="col-md-6">
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                                            <div>
                                                <img width="50" height="50" src="assets/img/profiles/avatar.jpg" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" alt=""/>
                                            </div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> on pages</h5>
                                            <p className="hint-text">via john smith</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                                            <div>T</div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> related topics</h5>
                                            <p className="hint-text">via pages</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                                            <div><i className="fa fa-headphones large-text "></i>
                                            </div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> music</h5>
                                            <p className="hint-text">via pagesmix</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                </div>
                                <div className="col-md-6">
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular bg-info text-white inline m-t-10">
                                            <div><i className="fa fa-facebook large-text "></i>
                                            </div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> on facebook</h5>
                                            <p className="hint-text">via facebook</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular bg-complete text-white inline m-t-10">
                                            <div><i className="fa fa-twitter large-text "></i>
                                            </div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5">Tweats on<span className="semi-bold result-name"> ice cream</span></h5>
                                            <p className="hint-text">via twitter</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                    {/*<!-- BEGIN Search Result Item !-->*/}
                                    <div className="">
                                        {/*<!-- BEGIN Search Result Item Thumbnail !-->*/}
                                        <div className="thumbnail-wrapper d48 circular text-white bg-danger inline m-t-10">
                                            <div><i className="fa fa-google-plus large-text "></i>
                                            </div>
                                        </div>
                                        {/*<!-- END Search Result Item Thumbnail !-->*/}
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5">Circles on<span className="semi-bold result-name"> ice cream</span></h5>
                                            <p className="hint-text">via google plus</p>
                                        </div>
                                    </div>
                                    {/*<!-- END Search Result Item !-->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- END Overlay Search Results !-->*/}
                </div>
                {/*<!-- END Overlay Content !-->*/}
            </div>
        );
    }
}