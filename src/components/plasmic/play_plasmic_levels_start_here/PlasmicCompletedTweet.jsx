// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: X1Sp3Qobs3uAje
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
import * as sty from "./PlasmicCompletedTweet.module.css"; // plasmic-import: X1Sp3Qobs3uAje/css
import CommentIcon from "./icons/PlasmicIcon__Comment"; // plasmic-import: iwoWJL22TqD842/icon
import RefreshIcon from "./icons/PlasmicIcon__Refresh"; // plasmic-import: Sl3hJDCgKV6Yal/icon
import HeartIcon from "./icons/PlasmicIcon__Heart"; // plasmic-import: SehUfDeCUwXO98/icon
import UploadIcon from "./icons/PlasmicIcon__Upload"; // plasmic-import: mvJ6GyKo0-fTsp/icon

export const PlasmicCompletedTweet__VariantProps = new Array();

export const PlasmicCompletedTweet__ArgProps = new Array();

function PlasmicCompletedTweet__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img)}
        role={"img"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__siDzX)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__mgmDe
          )}
        >
          {"Mark Dalgleish"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__fCQoM
          )}
        >
          {
            "Other industries figured out a long time ago that you can't go straight from concept design to construction. If we want to do design systems right, we're missing a step."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__e8Xmb)}
        >
          <CommentIcon
            className={classNames(defaultcss.all, sty.svg__iFe5M)}
            role={"img"}
          />

          <RefreshIcon
            className={classNames(defaultcss.all, sty.svg__qn2Lf)}
            role={"img"}
          />

          <HeartIcon
            className={classNames(defaultcss.all, sty.svg___4CMEz)}
            role={"img"}
          />

          <UploadIcon
            className={classNames(defaultcss.all, sty.svg__hnkDd)}
            role={"img"}
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCompletedTweet__ArgProps,
      internalVariantPropNames: PlasmicCompletedTweet__VariantProps
    });

    return PlasmicCompletedTweet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedTweet";
  } else {
    func.displayName = `PlasmicCompletedTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedTweet = Object.assign(
  // Top-level PlasmicCompletedTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicCompletedTweet
    internalVariantProps: PlasmicCompletedTweet__VariantProps,
    internalArgProps: PlasmicCompletedTweet__ArgProps
  }
);

export default PlasmicCompletedTweet;
/* prettier-ignore-end */
