import { Component, OnInit, TemplateRef } from '@angular/core';
import {FeatureViewer} from 'feature-viewer-typescript/lib';
// import {FeatureViewer} from 'featureviewer/lib';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// @ts-ignore
@Component({
  selector: 'app-featureviewer',
  templateUrl: './featureviewer.component.html',
  styleUrls: [
    './featureviewer.component.scss',
    '../../../node_modules/codemirror/lib/codemirror.css',
    '../../../node_modules/codemirror/theme/material.css'
  ]
})
export class FeatureviewerComponent implements OnInit {
  private isEmpty = false;
  private lastFV;
  private triggeredListener: string;
  private FVInitString: string;
  private disprotfv;
  private modalRef: BsModalRef;
  private collapsed: false;
  private currentposition = 'Current position';
  private currentzoom = 'Current zoom';
  public importString = '\n\timport {FeatureViewer} from \'feature-viewer-typescript/lib\';'
  public importReactString = "\n\timport {FeatureViewer} from \"feature-viewer-typescript/lib\";\n" +
    "\timport 'feature-viewer-typescript/assets/fv.scss'\n"
  public htmlString: string;
  public emptyme = function () {
    console.log('Empty!');
    this.isEmpty = true;
    this.lastFV.emptyFeatures();
  };
  public addme = function () {
    this.isEmpty = false;
    const featurelist = [
      { // simplest
        type: 'rect',
        id: 'mysimplefeature',
        data: [ {x: 50, y: 100} ],
        sidebar: [
          {
            id: 'MyPercentage',
            type: 'percentage',
            label: 50
          },
          {
            id: 'MyHtml',
            content: '<button class="btn btn-primary">Button</button>',
            tooltip: 'Something in tooltip'
          },
          {
            id: 'UniProt',
            type: 'button',
            label: 'UniProt',
            tooltip: '<b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>\n' +
              '<b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>'
          },
          {
            id: 'Link',
            type: 'icon',
            label: 'M8 1.88v-1.88h2v16h10l-4 4h-14l-2-4h8v-2h-8v-0.26c3.736-3.009 6.529-7.050 ' +
              '7.955-11.69l0.045-0.17zM19.97 14h-9.97v-0.36c1.263-1.865 2.017-4.164 2.017-6.64s-' +
              '0.753-4.775-2.043-6.682l0.027 0.042v-0.2c5.609 2.315 9.566 7.57 9.968 13.793l0.002 0.047z'
          }
        ],
        isOpen: true,
        subfeatures: [
          {
            type: 'rect',
            data: [
              {x: 20, y: 30},
              {x: 15, y: 45},
              {x: 70, y: 100, label: 'myRect', tooltip: 'myTooltip'}
            ],
            id: 'aDifferentId',
            label: 'subfeature',
            subfeatures: [
              {
                type: 'lollipop',
                data: [
                  {x: 20, y: 1},
                  {x: 70, y: 0.15, label: 'myLollipop', tooltip: 'myTooltip'}
                ],
                id: 'subfeatureOfsubfeature',
                // tslint:disable-next-line:max-line-length
                label: '<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">My very long label should have ellipses</div>'
              }
            ]
          }
        ]
      },
      { // circle to test
        type: 'circle',
        id: 'mysimplecircle',
        label: 'Circles',
        color: '#aae2b2',
        data: [
          {x: 10, y: 0.5},
          {x: 20, y: 0.8, color: '#00ac8f', opacity: 0.5},
          {x: 30, y: 1, color: '#c0efd5'},
          {x: 40, y: 1, stroke: '#675b5b'}
        ]
      },
    ];
    this.lastFV.addFeatures(featurelist);
  };
  public highlightOne = function() {
    this.lastFV.highlightRegion({x: 20, y: 30}, 'aDifferentId');
  };
  public highlightPos = function() {
    this.lastFV.highlightPosition({start: 30, end: 50});
  };
  public collapseExpand = function() {
    if (this.collapsed === true) {
      this.lastFV.expandAll();
      this.collapsed = false;
    } else {
      this.lastFV.collapseAll();
      this.collapsed = true;
    }
  };
  public getPosition() {
    this.currentposition = this.lastFV.getCurrentPosition();
  }
  public getZoom() {
    this.currentzoom = this.lastFV.getCurrentZoom();
  }

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

    this.FVInit('fvDivInit');
    this.FVInitString = '<div id="fvDivInit"></div>';

    this.FVaddFeatures('fvDvAddfeatures');

    this.lastFV = this.FVaddSubfeatures('fvDvAddSubfeatures');

    this.FVaddSequence('fvDvAddSequence');

    this.triggeredListener = 'No listener has ben triggered yet';
    this.triggerlisteners(this.lastFV);

    this.htmlString = '<head>\n' +
      '<link rel="stylesheet" type="text/css" href="./dist/fv.css"></div>\n' +
      '</head>\n' +
      '<div id="fvDivInit"></div>\n' +
      '\n' +
      '<script src="./dist/feature-viewer-webpack.bundle.js"></script>\n' +
      '<script>\n' +
      '    const initViewer = function (divId) {\n' +
      '        var P04050 = \'MTKFYIRRNEGKNYIRRNEGKDEDRKQLQKCCTEMSELRSPL\';\n' +
      '        var fv = new FeatureViewer(P04050, \'#\' + divId, {\n' +
      '            toolbar: true,\n' +
      '            toolbarPosition: \'left\',\n' +
      '            brushActive: true,\n' +
      '            zoomMax: 5,\n' +
      '            flagColor: \'#DFD5F5\'\n' +
      '        });\n' +
      '        return fv;\n' +
      '    }\n' +
      '    initViewer("fvDivInit")\n' +
      '</script>';

  }

  FVInit(divId) {
    // tslint:disable-next-line:max-line-length
    const P04050 = 'MTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPLMTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPLMTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPL';
    const fv = new FeatureViewer(P04050, '#' + divId, {
      toolbar: true, // zoom
      toolbarPosition: 'left',
      brushActive: true,
      zoomMax: 10,       // define the maximum range of the zoom
      flagColor: '#DFD5F5'
    });
    return fv;
  }

  FVaddFeatures(divId) {
    const modaltemplate = '<div class="modal-header"> <h4 class="modal-title pull-left">Modal</h4>' +
      '</button> </div> <div class="modal-body"> This is a modal. </div>';
    const fv = this.FVInit(divId);
    const featurelist = [
      { // simplest
        type: 'rect',
        id: 'useUniqueIds',
        data: [ {
          x: 50, y: 108,
          tooltip: '<p style="display: inline-block;"> Tooltip with icon </p> <svg style="width: 20px"><path d="M13 8v-6h-6v6h-5l8 8 8-8h-5zM0 18h20v2h-20v-2z"></path></svg>'} ],
      },
      { // simplest
        type: 'rect',
        id: 'useUniqueId2',
        label: 'My Label',
        data: [ {
          x: 10, y: 20,
          tooltip: '<button class="btn btn-primary">Button</button>'} ],
      },
      { // curve, height and yLim
        type: 'curve',
        id: 'mycurve',
        label: 'The curve',
        data: [{x: 1, y: 0}, {x: 40, y: 102}, {x: 80, y: 5}, {x: 50, y: 184}, {x: 110, y: 4}],
        height: 1,
        yLim: 200,
        color: '#00babd'
      },
      { // tooltip
        type: 'unique',
        id: 'uniquefeature',
        label: '<span style="color: #00ac8f; font-family: Sawasdee">Styled label for unique</span>',
        color: '#84716a',
        data: [ { x: 5, tooltip: modaltemplate }, { x: 92, y: 1 } ]
      },
      {
        type: 'path',
        id: 'mypath',
        label: 'The paths',
        data: [{x: 10 , y: 15}, {x: 50, y: 70}, {x: 40, y: 60, color: '#00ac8f', tooltip: 'I have different color'}],
        color: '#61795e',
        height: 10,
        tooltip: '<b>Very</b> <span style="color: #C21F39">Stylable</span> <b><i><span style="color: #ffc520">Tooltip </span></i></b>'
      }
    ];
    fv.addFeatures(featurelist);
    return fv;
  }

  FVaddSubfeatures(divId) {
    const P04050 = 'A'.repeat(393);
    const fv = new FeatureViewer(P04050, '#' + divId, {
      toolbar: false,
      showAxis: true,
      showSequence: true,
      zoomMax: 10,       // define the maximum range of the zoom
      sideBar: 240,
      flagTrack: 200,
      flagTrackMobile: 100
    });
    const featurelist = [
      { // simplest
        type: 'rect',
        id: 'mysimplefeature',
        data: [ {x: 50, y: 100} ],
        sidebar: [
          {
            id: 'MyPercentage',
            type: 'percentage',
            label: 50
          },
          {
            id: 'MyHtml',
            content: '<button class="btn btn-primary">Button</button>',
            tooltip: 'Something in tooltip'
          },
          {
            id: 'UniProt',
            type: 'button',
            label: 'UniProt',
            tooltip: '<b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>\n' +
              '<b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>'
          },
          {
            id: 'Link',
            type: 'icon',
            label: 'M8 1.88v-1.88h2v16h10l-4 4h-14l-2-4h8v-2h-8v-0.26c3.736-3.009 6.529-7.050 ' +
              '7.955-11.69l0.045-0.17zM19.97 14h-9.97v-0.36c1.263-1.865 2.017-4.164 2.017-6.64s-' +
              '0.753-4.775-2.043-6.682l0.027 0.042v-0.2c5.609 2.315 9.566 7.57 9.968 13.793l0.002 0.047z'
          }
        ],
        isOpen: true,
        subfeatures: [
          {
            type: 'rect',
            data: [
              {x: 20, y: 30},
              {x: 15, y: 45},
              {x: 70, y: 100, label: 'myRect', tooltip: 'myTooltip'}
            ],
            id: 'aDifferentId',
            label: 'subfeature',
            subfeatures: [
              {
                type: 'lollipop',
                data: [
                  {x: 20, y: 1},
                  {x: 70, y: 0.15, label: 'myLollipop', tooltip: 'myTooltip'}
                ],
                id: 'subfeatureOfsubfeature',
                label: '<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">My very long label should have ellipses</div>>'
              }
            ]
          }
        ]
      },
      { // circle to test
        type: 'circle',
        id: 'mysimplecircle',
        label: 'Circles',
        color: '#aae2b2',
        data: [
          {x: 10, y: 0.5},
          {x: 20, y: 0.8, color: '#00ac8f', opacity: 0.5},
          {x: 30, y: 1, color: '#c0efd5'},
          {x: 40, y: 1, stroke: '#675b5b'}
        ]
      },
    ];
    fv.addFeatures(featurelist);
    return fv;
  }

  FVaddSequence(divId) {
    const P04050 = 'A'.repeat(1007);
    const fv = new FeatureViewer(P04050, '#' + divId, {
      showAxis: true,
      showSequence: true,
      toolbar: false, // zoom
      toolbarPosition: 'right',
      zoomMax: 10,       // define the maximum range of the zoom
      sideBar: 220
    });
    const data = [];
    for (let i = 0; i < P04050.length; i++) {
      data.push({
        x: i,
        y: i + 1,
        tooltip: P04050[i]
      });
    }
    const featurelist = [
      { // simplest
        type: 'unique',
        id: 'myseqfeature',
        data: data
      }
    ];
    fv.addFeatures(featurelist);
    return fv;
  }

  triggerlisteners(featureviewer) {
    featureviewer.onButtonSelected((res) => {
      this.triggeredListener = 'Button was clicked, the listener returns an object referring to button id: ' + res.detail.id;
    });
    featureviewer.onFeatureSelected((res) => {
      this.triggeredListener = 'A feature was clicked, the listener returns an object referring to feature id: ' + res.detail.id;
    });
    featureviewer.onRegionSelected((res) => {
      this.triggeredListener = 'Region was clicked, the listener returns an object referring to feature id: ' +
        res.detail.id + ', region start: ' + res.detail.selectedRegion.x + ' and end: ' + res.detail.selectedRegion.y;
    });
    featureviewer.onZoom((res) => {
      this.triggeredListener = 'Zoomx' + res.detail.zoom + ' was triggered, from ' + res.detail.start + ' to ' + res.detail.end;
    });
    featureviewer.onClearSelection((res) => {
      this.triggeredListener = 'Zoom was cleared';
    });
  }

}
