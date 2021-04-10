// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: YAQxoICWcz-4KZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicCompletedDashboard.module.css"; // plasmic-import: YAQxoICWcz-4KZ/css
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: T1iDfvdolZwobp/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: _OUwahdFHY-uQ3/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: Q-RXCjALAdhmm1/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: siYUwvCrTb2qT_/icon

export const PlasmicCompletedDashboard__VariantProps = new Array();

export const PlasmicCompletedDashboard__ArgProps = new Array();

function PlasmicCompletedDashboard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___0AfoG)}
      >
        <Icon16Icon
          className={classNames(defaultcss.all, sty.svg__prhvc)}
          role={"img"}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__uqFh
          )}
        >
          {"Dashboard"}
        </div>

        <Icon17Icon
          className={classNames(defaultcss.all, sty.svg__x9QVe)}
          role={"img"}
        />

        <Icon15Icon
          className={classNames(defaultcss.all, sty.svg__woOmw)}
          role={"img"}
        />
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__anNL)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__dQpW9)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__aRXd
            )}
          >
            {"Dashboard"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ynscp
            )}
          >
            {"Reports"}
          </div>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.box__f4NI)}>
          <Icon18Icon
            className={classNames(defaultcss.all, sty.svg___6GKpf)}
            role={"img"}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCompletedDashboard__ArgProps,
      internalVariantPropNames: PlasmicCompletedDashboard__VariantProps
    });

    return PlasmicCompletedDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedDashboard";
  } else {
    func.displayName = `PlasmicCompletedDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedDashboard = Object.assign(
  // Top-level PlasmicCompletedDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedDashboard
    internalVariantProps: PlasmicCompletedDashboard__VariantProps,
    internalArgProps: PlasmicCompletedDashboard__ArgProps
  }
);

export default PlasmicCompletedDashboard;
/* prettier-ignore-end */
